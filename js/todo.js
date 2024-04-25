function addTask() {
    // 1. get value from input
    var task = document.getElementById('input-task').value;
    // 2. create a new li element
    var ul = document.getElementById('list-task');
    var li = document.createElement('li');
    // 3. add value from input to li element
    var span = document.createElement('span');
    span.textContent = task;
    span.onclick = markAsDone;
    li.appendChild(span);
    // li.textContent = task;
    // 4. create classes for li element
    li.classList = 'list-group-item d-flex justify-content-between align-items-center';
    // 5. add li to ul
    ul.prepend(li);

    // 6. clear input
    document.getElementById('input-task').value = '';
    // 7. create delete button
    // 7.1 create button element
    var button = document.createElement('button');
    // 7.2 add text to button
    button.textContent = 'Delete';
    // 7.3 add class to button
    button.classList = 'btn btn-danger';
    // 7.4 add button to li
    li.appendChild(button);
}
function markAsDone() {
    var span = this;
    if(span.style.textDecoration ==='line_through') {
        span.style.textDecoration = 'none';

    } else {
        span.style.textDecoration = 'line-through';
    }
}