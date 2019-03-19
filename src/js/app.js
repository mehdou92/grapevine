console.log('app.js');

function translate(word, fromLanguage, toLanguage) {

    fetch("https://www2.deepl.com/jsonrpc", {
        "credentials": "include",
        "headers": {
            "accept": "*/*",
            "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "text/plain"
        },
        "referrer": "https://www.deepl.com/en/translator",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": "{\"jsonrpc\":\"2.0\",\"method\": \"LMT_handle_jobs\",\"params\":{\"jobs\":[{\"kind\":\"default\",\"raw_en_sentence\":\"je suis mehdi\",\"raw_en_context_before\":[],\"raw_en_context_after\":[],\"quality\":\"fast\"}],\"lang\":{\"user_preferred_langs\":[\"EN\"],\"source_lang_user_selected\":\"auto\",\"target_lang\":\"EN\"},\"priority\":-1,\"timestamp\":1553021133336},\"id\":6450006}",
        "method": "POST",
        "mode": "cors"
    })
        .then(function(response){
            console.log(response);
        });
}

translate();