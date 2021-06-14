<template>
<div id="main_wrapper">
	<div id="content">
	<p class="title">| Binary Calculator |</p>
	<hr /> <div id="display"></div> <hr />  
		<div class="section-1">
		  <button class="digit" id="btn0" @onclick="key(0)" >0</button>
		  <button class="digit" id="btn1" @onclick="key(1)">1</button>
		  <button class="option" id="btnClr" @onclick="clr()">Clr</button>
		</div>
		<div class="section-2">
		  <button id="btnSum" class="operator" @onclick="assignOperator('+')">+</button>
		  <button id="btnSub" class="operator" @onclick="assignOperator('-')">-</button>
		  <button id="btnMul" class="operator" @onclick="assignOperator('*')">*</button>
		  <button id="btnDiv" class="operator" @onclick="assignOperator('/')">/</button>
		  <button id="btnEql1" @onclick="Equal()">=</button>
		</div>
	 </div>
	</div>
</template>
<script>
    const result = document.getElementById("display");
   var x = y = operator = '';

function key(val) {
	if(operator) {
		y += val;
	} else {
		x += val;
	}
    renderResDiv();
}

function clr() {
	x = operator = y = '';
	renderResDiv();
}

function Equal() {
	x = parseInt(x, 2);
	y = parseInt(y, 2);
	switch(operator) {
		case '+':
			x += y;
			break;
		case '-':
			x -= y;
			break;
		case '*':
			x *= y;
			break;
		case '/':
			if(y)
				x /= y;
			break;
		default:
			break;
	}
	x = parseInt(x).toString(2);
	operator = y = '';
	renderResDiv();
}

function assignOperator(val) {
	operator = val;
	renderResDiv();
}

function renderResDiv() {
	result.innerHTML = x + operator + y;
}
</script>

<style>
#main_wrapper{
	margin:0 auto;
	width: 32%;
	background:gray;
	height:auto;
	border:5px solid black;
	margin-top:20px;
	border-top:21px solid #2a4b75;
}
#content {
	padding:10px 0 10px 0;
}

#display {
	height:45px;
	text-align:right;
	padding-right:2px;
	font-size:28px;
	color:#756e6e;
	font-family:Technology;
	border:5px solid #615354;
	border-top:10px solid #000;
	border-bottom:10px solid #000;
	background:#d0e1e6;
	padding-top:10px;
	overflow:hidden;
}

.digit {
	background: lightgreen;
	color: #000;
	display: inline;
	width:23.5%;
	height:50px;
	font-size:24px;
	border-radius:5px;
	margin:10px 0 5px 0;
}

.option{
	background:#ff3077;
	color: white;
	display: inline;
	font-size:24px;
	width:23.5%;
	height:50px;
	border-radius:5px;
}
#btnMode{
	background:blue;
}
#btnEql1{
	background:#03b1ff;
	color:#fff;
	font-size:40px;
	width:100%;
	height:55px;
	margin-top:10px;
	border:1px solid black;
	border-radius:15px;
}

.operator {
	background:#0c2835;
	color: #fff;
	height: 50px;
	width: 23.5%;
	font-size: 35px;
	border-radius:5px;
}	

#btnEql1:active,#btnMode:active, .digit:active,
.option:active, .operator:active{
	background:#74ff3b;
}
.title{
	text-align:center;
	font-size:20px;
	margin-bottom:5px;
}

#footer{
	height:40px;
	background:#18161b;
	margin-top:100px;
}
#footer p{
	color:#fff;
	text-align:center;
	display:block;
	padding:10px 20px;
}
#footer p a{
	text-decoration:none;
	color:#3333FF;
}
#footer p a:hover {
	color:red;
}
@media only screen and (min-width: 600px) and (max-width:768px) {
#main_wrapper{
	width:45%;
}
}@media only screen and (min-width: 479px) and (max-width:599px) {
#main_wrapper{
	width:60%;
}
}@media only screen and (min-width: 360px) and (max-width:480px) {
	#main_wrapper{
	width:90%;
	margin-top:20px;
}
}
</style>