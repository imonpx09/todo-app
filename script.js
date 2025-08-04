// Get references to HTML elements
//อ้างถึงองค์ประกอบ HTML ที่ต้องการใช้งาน
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
//ฟังก์ชันสำหรับเพิ่มรายการสิ่งที่ต้องทำใหม่
function addTask() {
    const taskText = taskInput.value.trim(); // Get input value and remove leading/trailing whitespace

    // Check if the input is empty
    //ตรวจสอบว่าช่องกรอกข้อความว่างเปล่าหรือไม่
    if (taskText === '') {
        alert('กรุณาป้อนรายการสิ่งที่ต้องทำ'); // Show an alert if empty
        return; // Exit the function
    }

    // Create a new list item (<li>)
    //สร้างองค์ประกอบรายการใหม่ (<li>)
    const listItem = document.createElement('li');

    // Create a span for the task text
    //สร้าง span สำหรับข้อความรายการ
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText; // Set the text content

// Create a "Complete" button
// สร้างปุ่ม "เสร็จสิ้น"
const completeBtn = document.createElement('button');
completeBtn.textContent = 'เสร็จสิ้น';
completeBtn.classList.add('complete-btn'); // Add a class for styling

// Add event listener to the complete button
// เพิ่ม Event Listener ให้กับปุ่ม "เสร็จสิ้น"
completeBtn.addEventListener('click', () => {
    listItem.classList.toggle('completed'); // Toggle 'completed' class on click
    // If the task is completed, change button text and color
    if (listItem.classList.contains('completed')) {
        completeBtn.textContent = 'ยกเลิก';
        completeBtn.style.backgroundColor = '#6c757d'; // Grey color
    } else {
        completeBtn.textContent = 'เสร็จสิ้น';
        completeBtn.style.backgroundColor = '#007bff'; // Blue color
    }
});

// Create a "Delete" button
// สร้างปุ่ม "ลบ"
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'ลบ';
deleteBtn.classList.add('delete-btn'); // Add a class for styling

// Add event listener to the delete button
// เพิ่ม Event Listener ให้กับปุ่ม "ลบ"
deleteBtn.addEventListener('click', () => {
    taskList.removeChild(listItem); // Remove the list item from the task list
});

// Append the task text and buttons to the list item
// เพิ่มข้อความรายการและปุ่มต่างๆ เข้าไปในรายการ
listItem.appendChild(taskSpan);
listItem.appendChild(completeBtn);
listItem.appendChild(deleteBtn);

// Append the new list item to the task list (<ul>)
// เพิ่มรายการใหม่เข้าไปในรายการสิ่งที่ต้องทำ (<ul>)
taskList.appendChild(listItem);

// Clear the input field after adding the task
// ล้างช่องกรอกข้อความหลังจากเพิ่มรายการแล้ว
taskInput.value = '';
}

// Add event listener to the "Add" button
// เพิ่ม Event Listener ให้กับปุ่ม "เพิ่ม"
addTaskBtn.addEventListener('click', addTask);

// Allow adding tasks by pressing Enter key in the input field
// อนุญาตให้เพิ่มรายการด้วยการกดปุ่ม Enter ในช่องกรอกข้อความ
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
       