var students = 	[
	{
		"mssv": 102170281,
		"name": "Le Viet Khanh",
		"email": "levietkhanh99@gmail.com"
	},
	{
		"mssv": 102170282,
		"name": "Ho Van Khoi",
		"email": "trieuphu99x@gmail.com"
	},
	{
		"mssv": 102170283,
		"name": "Nguyen Van A",
		"email": "ngva@gmail.com"
	},
	{
		"mssv": 102170284,
		"name": "Nguyen Van B",
		"email": "NVB@gmail.com"
	}
];
load();
function load(){
 	var tbody = document.getElementById('tbody');
 	var html = "";
 	for(var student of students){
		var tr = "<tr>" + 
				 	"<td id="+student.mssv+">"+student.mssv+"</td>"+ 
				 	"<td>"+student.name+"</td>"+
				 	"<td>"+student.email+"</td>" + 
				 	"<td>"+ 
					 	"<div class='btn-group'>"+ 
					 	"<div class='btn btn-warning' id='edit_"+student.mssv+"' onclick='editFunction("+student.mssv+")'><i class='fa fa-edit'></i> Sửa</div>"+
					 	"<div class='btn btn-danger' id='delete_"+student.mssv+"' onclick='delFunction("+student.mssv+")'><i class='fa fa-trash'></i> Xóa</div>"+
					 	"</div>" +
				 	"</td>" +
			 	"</tr>";
		html += tr;
 	}
 	tbody.innerHTML = html;
 }


function delFunction(mssv){
	var tmp_students = [];
	for(var student of students){
		if(parseInt(student.mssv) !== parseInt(mssv)){
			tmp_students.push(student);
		}
	}
	students = tmp_students;
	if(confirm("Bạn có chắc xóa sinh viên có mssv "+mssv+" ?")){
		load();
		alert("Đã xóa sinh viên thành công");
	}
}

function editFunction(mssv){
	var editStu = {};
	for(var student of students){
		if(parseInt(student.mssv) === parseInt(mssv) ){
			editStu = student;
		}
	}
	var name = prompt("Sửa tên sinh viên có mssv "+ mssv, editStu.name);
	if(name){
		for(var student of students){
			if(parseInt(student.mssv) === parseInt(mssv) ){
				student.name = name;
			}
		}
		load();
	}
}

function addClick(){
	var mssv = document.getElementById('mssv').value;
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var newStu = {
		"mssv": mssv,
		"name": name,
		"email": email
	}
	students.push(newStu);
	document.getElementById('mssv').value = "";
	document.getElementById('name').value = "";
	document.getElementById('email').value = "";
	alert("Đã thêm sinh viên "+ name +" thành công");
	load();
}
