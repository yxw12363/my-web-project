const dataObject ={
    "en":{
        "title":"password generator",
        "lang":["en","zh"],
        "settings":[
            {
                "label":"Password length",
                "type":"number"
            },
            {
                "label":"Include uppercase letters",
                "type":"checkbox"
            },
            {
                "label":"Include lowercase letters",
                "type":"checkbox"
            },
            {
                "label":"Include numbers",
                "type":"checkbox"
            },
            {
                "label":"Include symbols",
                "type":"checkbox"
            }
        ],
        "btnContent":"Generate Password",
        "confirmTitle":"Tips",
        "confirmContent":"Password copied to clipboard!",
        "confirmWarning":"Please generate a password first",
        "typeText":"Please select a password type"
    },
    "zh":{
        "title":"密码生成器",
        "settings":[
            {
                "label":"密码长度",
                "type":"number",
            },
            {
                "label":"包含大写字母",
                "type":"checkbox",
            },
            {
                "label":"包含小写字母",
                "type":"checkbox",
            },
            {
                "label":"包含数字",
                "type":"checkbox",
            },
            {
                "label":"包含符号",
                "type":"checkbox"
            }
        ],
        "btnContent":"生成密码",
        "confirmTitle":"温馨提示",
        "confirmContent":"密码已复制到剪贴板上",
        "confirmWarning":"请先生成密码",
        "typeText":"请选择一种密码类型"
    }
};
export default dataObject;