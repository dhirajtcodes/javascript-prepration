/**
 *
 * Event bubbling and event capturing are two ways that events propagate through the Document Object Model
 * (DOM) when an event occurs on an element.
 */

// event bubbling from child to grandparant
<div id="grandparent">
  <div id="parent">
    <button id="child">Click me</button>
  </div>
</div>;

//evnt capturing is vice versa from grandparant to child

/** Function declaration and function expression */

function declarationData() {
  console.log("declarationData");
}
const expressionData = function () {
  console.log("expressionData");
};

// 📌 3. Event Delegation
// Definition:
// A technique where a single event listener is added to a parent element, and events on child elements are handled using event.target.

// ✅ Useful when:

// Adding event listeners to dynamic elements.

// Reducing the number of listeners for performance.

{
  /* <ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<script>
  document.getElementById('list').addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      console.log('You clicked:', e.target.textContent);
    }
  });
</script> */
}
