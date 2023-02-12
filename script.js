// arrow function
const calculateInterest = () => {
    const principal = parseFloat(document.getElementById('principal-fixed').value);
    const rate = parseFloat(document.getElementById('rate-fixed').value) / 100 / 12;
    const years = parseFloat(document.getElementById('years-fixed').value) * 12;

    if (!principal || !rate || !years) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
    }

    const x = Math.pow(1 + rate, years);
    const monthlyPayment = (principal * x * rate) / (x - 1);
    const totalPayment = monthlyPayment * years;
    const totalInterest = totalPayment - principal;

    document.getElementById('output-fixed').innerHTML = `เงินผ่อนชำระต่อเดือน : ${monthlyPayment.toFixed(2)} บาท<br>
    ดอกเบี้ยที่ต้องชำระทั้งหมด : ${totalInterest.toFixed(2)} บาท<br><br>
    ยอดชำระสุทธิ : ${totalPayment.toFixed(2)} บาท`;
}