let record_btn = $('#record_btn');
let student_name = $('#student_name');

record_btn.click(()=>{
    $.ajax({
        url: '/study/record_one',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({'student_name': student_name.val()}),
        success: (result)=>{
            record_btn.text(result);
            record_btn.addClass('text-success');
        }
    })
});