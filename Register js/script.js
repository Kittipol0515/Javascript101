const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form')
const error = document.getElementById('error');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // สร้าง Array มารอรับ error word
    let errorMessage = []

    // Check firstName
    if (firstName.value === '') {
        errorMessage.push('First name cannot be empty string')
        console.log(errorMessage)
    }
    // Check email แบบง่ายๆ
    if (!email.value.includes('@')) {
        errorMessage.push('Email is invalid')
        console.log(errorMessage)
    }
    // Check password.length < 8?
    if (password.value.length < 8) {
        errorMessage.push('Password is too short')
        console.log(errorMessage)
    }
    // เอา text ใน Array errorMessage ใส่ใน div ที่มี id="error" ถ้า เช็คผ่านทุกอัน errorMessage จะเป็น empty arrayแล้วก็จะไม่ขึ้นในหน้า html
    error.innerHTML = errorMessage.join(', ');
})
