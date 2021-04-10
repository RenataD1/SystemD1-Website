function getCalendarURL(calendarId) {
  return "https://us-central1-stylemygcal.cloudfunctions.net/embeddableCalendarEvents?calendar_id=" + calendarId;
}

function replacePlaceholders() {
  var placeholderElements = document.getElementsByClassName("smgc-calendar-placeholder");
  var i;
  for (i = 0; i < placeholderElements.length; i++) {
    var placeholder = placeholderElements[i];
    var placeholderId = placeholder.id;
    var calendarId = placeholderId.replace("smgc-cal-", "");
    var req = new XMLHttpRequest();
    req.addEventListener("load", updateAppropriateCalendarDiv(calendarId, true));
    req.open("GET", getCalendarURL(calendarId));
    req.send();
  }
}

function requestWithOffset(calendarId, offset) {
  var req = new XMLHttpRequest();
  req.addEventListener("load", updateAppropriateCalendarDiv(calendarId, false));
  req.open("GET", getCalendarURL(calendarId) + "&offset=" + offset);
  req.send();
}

function updateAppropriateCalendarDiv(calendarId, firstCallReplaceEverything) {
  return function() {
    var responseJSON = JSON.parse(this.response);
    var calendarCSS = responseJSON.calendarCSS;
    var calendarHTML = responseJSON.calendarHTML;

    var outermostDivId = "smgc-cal-" + calendarId;
    var cssId = "smgc-cal-" + calendarId + "-css-container";
    var htmlId = "smgc-cal-" + calendarId + "-html-container";

    var outermostPlaceholder = document.getElementById(outermostDivId);

    if (firstCallReplaceEverything) {
      outermostPlaceholder.innerHTML = '';

      var newCSSPlaceholder = document.createElement("style");
      newCSSPlaceholder.id = cssId;
      newCSSPlaceholder.innerText = calendarCSS;
      outermostPlaceholder.appendChild(newCSSPlaceholder);

      var newHTMLPlaceholder = document.createElement("div");
      newHTMLPlaceholder.id = htmlId;
      newHTMLPlaceholder.innerHTML = calendarHTML;
      outermostPlaceholder.appendChild(newHTMLPlaceholder);
    } else {
      var htmlPlaceholder = document.getElementById(htmlId);
      htmlPlaceholder.innerHTML = calendarHTML;
    }

    if ('ResizeObserver' in self) {
      // Once this calendar's container div is in place on the page,
      //    subscribe the ResizeObserver to it, to respond to size changes
      setUpContainerResizeObservers(htmlId);
    }
  };
}

// Subscribe the resize observer to any size changes of a particular element
function setUpContainerResizeObservers(containerId) {
  var element = document.getElementById(containerId);
  resizer.observe(element);
}

// If ResizeObserver is supported in user's browser, this code will establish a
//    listener that we'll aim at each calendar container element on the page. Its job
//    is to update their size classes when the container width crosses a breakpoint
if ('ResizeObserver' in self) {
  // Create a single ResizeObserver instance to handle all container elements.
  //    It is created with a callback that's invoked when observed elements' sizes change
  var resizer = new ResizeObserver(function(calendarContainers) {
    // These breakpoints will apply to all observed elements without custom breakpoints
    var defaultBreakpoints = {
      'smgc-cal-xs': 0,
      'smgc-cal-sm': 384,
      'smgc-cal-md': 576,
      'smgc-cal-lg': 768,
      'smgc-cal-xl': 960,
    };

    calendarContainers.forEach(function(calendarContainer) {
      // Use any custom breakpoints on the observed element
      var breakpoints = calendarContainer.target.dataset.breakpoints ?
        JSON.parse(calendarContainer.target.dataset.breakpoints) :
        defaultBreakpoints;

      // Update the size class of current observed element
      var maxApplicableWidth = 0;
      var applicableSizeClass;
      Object.keys(breakpoints).forEach(function(breakpoint) {
        // We remove all classes currently applied ...
        calendarContainer.target.classList.remove(breakpoint);
        // ... while looking for the right one to apply now
        var minWidth = breakpoints[breakpoint];
        if (calendarContainer.contentRect.width >= minWidth && minWidth >= maxApplicableWidth) {
          maxApplicableWidth = minWidth;
          applicableSizeClass = breakpoint;
        }
      });
      // Add the size class applicable to current container width, e.g. LG when width is 800px
      calendarContainer.target.classList.add(applicableSizeClass);
    });
  });
}

document.addEventListener("DOMContentLoaded", replacePlaceholders);
