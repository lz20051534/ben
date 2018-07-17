var $P2_table = document.getElementById("P2_table");
var $P2_tr = document.getElementsByClassName("P2_tr"); //P2_tr:所有的单元格ClassName
var $P2_input = document.getElementsByTagName("input");// P2_input:指向文本输入框
var $ti_shi = document.getElementById("ti_shi");//提示输入框
var $P2_button = document.getElementById("P2_button");//新增按钮

document.getElementById('navPortrait').addEventListener('mouseenter', function () {
	this.style.border = 'solid 1px #e00606';
	this.style.cursor = 'pointer';

});
document.getElementById('navPortrait').addEventListener('mouseleave', function () {
	this.style.border = 'none';
});
for (var numIndex = 0; numIndex < document.getElementsByClassName('indexNav').length; numIndex++) {
	document.getElementsByClassName('indexNav')[numIndex]. onmousemove = function () {
		this.style.background = '#151515';
		this.childNodes[5].style.background = '#b83131';
	};
	document.getElementsByClassName('indexNav')[numIndex].onmouseout = function () {
		this.style.background = 'none';
		this.childNodes[5].style.background = 'none';
	};
}
for (var numIndex2 = 0; numIndex2 < document.getElementsByClassName('portraitTextButton').length; numIndex2++) {
	document.getElementsByClassName('portraitTextButton')[numIndex2]. onmousemove = function () {
		this.style.background = 'red';
	};
	document.getElementsByClassName('portraitTextButton')[numIndex2].onmouseout = function () {
		this.style.background = '#9f241b';
	};
}

//给单元格添加鼠标监听事件：
for (var i = 1; i < $P2_tr.length; i++) {
    $P2_tr[i].addEventListener("mouseenter", function () {
        this.style.background = "#eee";
    });
    $P2_tr[i].addEventListener("mouseleave", function () {
        this.style.background = "#fff";
    });
}

//给文本框添加鼠标监听事件
for (var j = 0; j < $P2_input.length; j++) {
    $P2_input[j].addEventListener("mouseenter", function () {
        this.style.border = "solid 1px red";
    });
    $P2_input[j].addEventListener("mouseleave", function () {
        this.style.border = "solid 1px #7e7e7e";
    });
}

//左边文本输入框的焦点事件-----失去焦点
$P2_input[0].addEventListener("blur", function () {
    if (this.value === "请输入新增的学生学号" && $P2_input[1].value === "请输入新增的学生姓名" || this.value === "") {
        $ti_shi.innerHTML = "请在下面的文本框里输入要添加的学号和姓名";
    }
    else {
        $ti_shi.innerHTML = "请点击新增按钮进行添加";
    }
    if (this.value === "") {
        this.value = "请输入新增的学生学号";
        this.style.color = "#676767";
    }
});

//左边文本输入框的焦点事件-----获取焦点
$P2_input[0].addEventListener("focus", function () {
    if (this.value === "请输入新增的学生学号") {
        this.value = "";
        this.style.color = "#fff";
        $ti_shi.innerHTML = "请输入新增的学生学号";
    }
    if (this.value.toString().length !== 0) {
        $ti_shi.innerHTML = "学号字符数：(" + this.value.toString().length + "/5）";
    }
});

//左边文本输入框的文本改变事件
$P2_input[1].onblur = function () {
    if (this.value === "请输入新增的学生学号" && $P2_input[1].value === "请输入新增的学生姓名" || this.value === "") {
        $ti_shi.innerHTML = "请在下面的文本框里输入要添加的学号和姓名";
    }
    else {
        $ti_shi.innerHTML = "请点击新增按钮进行添加";
    }
    if (this.value === "") {
        this.value = "请输入新增的学生姓名";
        this.style.color = "#676767";
    }
};

//右边文本输入框的焦点获取事件
$P2_input[1].addEventListener("focus", function () {
    if (this.value === "请输入新增的学生姓名") {
        this.value = "";
        this.style.color = "#fff";
        $ti_shi.innerHTML = "请输入新增的学生姓名";
    }
    if (this.value.toString().length !== 0) {
        $ti_shi.innerHTML = "姓名字符数：(" + this.value.toString().length + "/3）";
    }
});

//右边文本输入框的焦点失去事件
$P2_input[0].oninput = function () {
    var P2_string = this.value.toString();
    $ti_shi.innerHTML = "学号字符数：(" + P2_string.length + "/5）";
};

//右文本框的文本改变事件
$P2_input[1].oninput = function () {
    var P2_string = this.value.toString();
    $ti_shi.innerHTML = "姓名字符数：(" + P2_string.length + "/3）";
};

//新增按钮的鼠标监听事件
$P2_button.addEventListener("mouseover", function () {
    this.style.background = "red";
    this.style.color = "#fff";
    this.style.border = "solid 2px red"
});
$P2_button.addEventListener("mouseout", function () {
    this.style.background = "#86151b";
    this.style.color = "#fff";
    this.style.border = "solid 2px #86151b"
});
//新增事件
$P2_button.onclick = function () {
    var New_XH = $P2_input[0].value;//获取学号输入框的值
    var New_Name = $P2_input[1].value;//获取姓名输入框的值

    var New_tr = document.createElement("div");//新建表格的tr
    New_tr.className = "P2_tr";//给tr赋值class

    var New_td1 = document.createElement("div");//新建学号单元格
    var New_td1Text = document.createTextNode(New_XH.toUpperCase());//新建一个文本标签，内容为学号的值
    New_td1.setAttribute("class", "P2_td P2_XHNumber");//学号单元格添加class属性
    New_td1.appendChild(New_td1Text);//往学号单元格里添加学号

    var New_td2 = document.createElement("div");//新建姓名单元格
    var New_td2Text = document.createTextNode(New_Name);//新建一个姓名文本标签，内容为姓名文本框的内容
    New_td2.className = "P2_New_td";//给姓名单元格赋值class属性
    New_td2.appendChild(New_td2Text);//往姓名单元格里添加姓名

    var New_td3 = document.createElement("div");//新建一个div标签，此标签代表删除
    var New_td3AText = document.createTextNode("删除");//新建文本标签，内容为删除两个字
    var New_td3A = document.createElement("a");//新建一个 a 标签
    New_td3.className = "P2_td";//删除单元格的class属性
    New_td3A.href = "javascript:";//给a标签赋值href属性
    New_td3A.appendChild(New_td3AText);//往a标签里添加删除俩字
    New_td3.appendChild(New_td3A);//往删除单元格里添加带超链接的删除俩字

    New_tr.appendChild(New_td1);//往新加的表格里添加学号单元格
    New_tr.appendChild(New_td2);//往新加的表格里添加姓名单元格
    New_tr.appendChild(New_td3);//往新加的表格里添加删除单元格

    if (New_XH.length !== 5/*学号的长度不为5*/ || New_Name.length > 3/*姓名的长度大于3*/ || New_Name.length < 2/*姓名的长度小于2*/) {
        $ti_shi.innerHTML = "信息添加失败，学号的长度必须为 5; 姓名的长度不能大于 3且不能小于 2";//提示报错
    }
    else {
        var P2_XuehaoArray = New_XH.toString(); //学号转为数组
        var P2_NameArray = New_Name.toString();//姓名转为数组
        if (P2_XuehaoArray[0].toUpperCase() !== "X") {                                 /*判断学号是否合法*/
            $ti_shi.innerHTML = "信息添加失败，学号的第 1 个字符必须是\"X\"或者\"x\"";
        }
        else if (P2_XuehaoArray[1].toUpperCase() !== "H") {
            $ti_shi.innerHTML = "信息添加失败，学号的第 2 个字符必须是\"H\"或者\"h\"";
        }
        else if (!/^[0-9]+$/.test(P2_XuehaoArray[2])) {
            $ti_shi.innerHTML = "信息添加失败，学号的第 3 个字符必须是数字";
        }
        else if (!/^[0-9]+$/.test(P2_XuehaoArray[3])) {
            $ti_shi.innerHTML = "信息添加失败，学号的第 4 个字符必须是数字";
        }
        else if (!/^[0-9]+$/.test(P2_XuehaoArray[4])) {
            $ti_shi.innerHTML = "信息添加失败，学号的第 5 个字符必须是数字";
        }
        else if(New_XH.toUpperCase() === "XH000"){
            $ti_shi.innerHTML = "信息添加失败，学号必须从001开始";
        }
        else {
            var P2_XHrepeat = true; //判断学号是否重复，true为不重复，表示可以添加
            var P2_NameCN = 0; //英文字符
            var P2_NameZN = 0; //中文字符
            for (var P2_tmpi = 0; P2_tmpi < document.getElementsByClassName("P2_td P2_XHNumber").length; P2_tmpi++) {
                if (New_XH.toUpperCase() === document.getElementsByClassName("P2_td P2_XHNumber")[P2_tmpi].innerHTML) {
                    $ti_shi.innerHTML = "信息添加失败，学号不能重复";
                    P2_XHrepeat = false;
                    break;
                }
            }
            for (var P2_tmpi2 = 0; P2_tmpi2 < New_Name.length; P2_tmpi2++) {
                if (!/^[\u4e00-\u9fa5],{0,}$/.test(P2_NameArray[P2_tmpi2]) && !/^[A-Za-z]+$/.test(P2_NameArray[P2_tmpi2])) {
                    $ti_shi.innerHTML = "信息添加失败，姓名只能是英文字符或者汉字";
                    P2_XHrepeat = flase;
                    break;
                }
                else if (/^[\u4e00-\u9fa5],{0,}$/.test(P2_NameArray[P2_tmpi2])) {
                    P2_NameZN++;
                }
                else if (/^[A-Za-z]+$/.test(P2_NameArray[P2_tmpi2])) {
                    P2_NameCN++;
                }
            }
            if (P2_NameCN !== 0 && P2_NameZN !== 0) {
                $ti_shi.innerHTML = "信息添加失败，姓名不能同时包含汉字和英文";
            }
            if (P2_XHrepeat && (P2_NameCN === 0 || P2_NameZN === 0)) {
                //信息添加成功
                $P2_table.appendChild(New_tr);
            }
        }
    }

    New_td3A.onclick = function () {
        $P2_table.removeChild(New_tr);
    };
    New_tr.addEventListener("mouseenter", function () {
        this.style.background = "#eee";
    });
    New_tr.addEventListener("mouseleave", function () {
        this.style.background = "#fff";
    });
};

//固定删除事件，只删除默认值
function P2_delete(x) {
    var P2_tempX = x.parentNode.parentNode;
    $P2_table.removeChild(P2_tempX)
}
