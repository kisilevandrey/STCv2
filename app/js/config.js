export const conf = [
    {id:"Name",
    minlength:3,
    maxlength:30},

    {id:"UserName",
     minlength:3,
     maxlength:30},

    {id:"UserEmail",
    isPattern:true,
    pattern:"r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;"},

    {id:"UserPhone",
    minlength:10,
    maxlength:13},

    {id:"UserPassword1",
    isPattern:true,
    pattern:"r = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/"
    },
    {id:"UserPassword2",}

]