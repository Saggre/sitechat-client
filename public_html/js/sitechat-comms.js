

$(".sitechat-send-button").click(function () {
    const input_text = $('.sitechat-input-field').val();
    console.log(input_text);

    own_ui_message(input_text);

    var jqxhr = $.post({
        url: "http://localhost:1337/v1/api/respond",
        data: {input: input_text}
    }, function (data, textStatus, jQxhr) {
        console.log(data);

        if (!data.error) {
            console.log(data.response);
            other_ui_message(data.response);
        }
    }).done(function () {
        console.log("second success");
    }).fail(function (jqXhr, textStatus, errorThrown) {
        console.log("error");
    }).always(function () {
        console.log("finished");
    });

});

function own_ui_message(string) {
    const chatwindow = $('.sitechat-chatwindow-wrapper');
    const message_html = $('<div class="sitechat-own-bubble sitechat-bubble"><span>' + string + '</span></div>');
    message_html.appendTo(chatwindow);
}

function other_ui_message(string) {
    const chatwindow = $('.sitechat-chatwindow-wrapper');
    const message_html = $('<div class="sitechat-other-bubble sitechat-bubble"><span>' + string + '</span></div>');
    message_html.appendTo(chatwindow);
}