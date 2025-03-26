$(document).ready(function () {  
    var form = $('#contact-form');  
    var formMessages = $('.ajax-response');  

    // Fungsi untuk mengenerate soal perkalian acak  
    function generateMathQuestion() {  
        var num1 = Math.floor(Math.random() * 10) + 1;  // Angka pertama antara 1 dan 10  
        var num2 = Math.floor(Math.random() * 10) + 1;  // Angka kedua antara 1 dan 10  
        var correctAnswer = num1 * num2;  
        
        // Pastikan elemen-elemen ini ada di DOM  
        $('#num1').text(num1);  
        $('#num2').text(num2);  
        $('#correct-answer').val(correctAnswer);  
        
        // Reset input dan sembunyikan pesan error  
        $('#answer').val('');  
        $('#error-message').hide();  
    }  

    // Tambahkan event listener untuk memastikan modal terbuka  
    $('#verificationModal').on('show.bs.modal', function () {  
        console.log("Modal terbuka!");  
        generateMathQuestion();  
    });  

    // Menangani klik kirim pada form  
    $(form).submit(function (e) {  
        e.preventDefault();  
        
        // Pastikan menggunakan Bootstrap modal method  
        $('#verificationModal').modal('show');  
    });  

    
    // Menangani klik kirim jawaban di modal  
    $('#verifyAnswerBtn').click(function () {  
        var userAnswer = $('#answer').val().trim();  
        var correctAnswer = $('#correct-answer').val();  

        console.log("Jawaban Pengguna: " + userAnswer);  
        console.log("Jawaban Benar: " + correctAnswer);  

        if (userAnswer == correctAnswer) {  
            // Mengambil token reCAPTCHA  
            grecaptcha.execute(recaptchaSiteKey, { action: 'submit' }).then(function (token) {  
                // Simpan token ke input tersembunyi  
                $('#recaptcha_token').val(token);
                var formData = $(form).serialize();  

                $.ajax({  
                    type: 'POST',  
                    url: $(form).attr('action'),  
                    data: formData,  
                    dataType: 'json'  
                })  
                .done(function (response) {  
                    console.log(response);
                    if (response.status === 'success') {  
                        $(formMessages).removeClass('error');  
                        $(formMessages).addClass('success');  
                        $(formMessages).text(response.message);

                        $('#contact-form input, #contact-form textarea').val('');  
                        $('#contact-form select[name="budget"]').prop('selectedIndex', 0);  

                        setTimeout(function () {  
                            $(formMessages).empty().removeClass('success');  
                            location.reload();  
                        }, 5000);  
                    }  
                })  
                .fail(function (xhr) {  
                    $(formMessages).removeClass('success');  
                    $(formMessages).addClass('error');  

                    var errorMessage = 'Oops! An error occurred and your message could not be sent.';  
                    if (xhr.responseJSON && xhr.responseJSON.message) {  
                        errorMessage = xhr.responseJSON.message;  
                    }  

                    $(formMessages).text(errorMessage);  
                });  

                $('#verificationModal').modal('hide');  
            });  
        } else {  
            $('#error-message').show();  
        }  
    });  
});  