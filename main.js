student_array=[]
function submit(){
    for(i=1;i<=4;i++){
name_student=document.getElementById("name_of_the_student_"+i).value;
student_array.push(name_student)
console.log (student_array)
}
for(b=0;b<=3;b++){
document.getElementById("display_name_with_commas").innerHTML+=student_array[b]+"<br>";
}
document.getElementById("submit_button").style.display="none"
document.getElementById("sort_button").style.display="inline-block"

}
function sorting(){
    student_array.sort()
    for(b=0;b<=3;b++){
        document.getElementById("display_name_without_commas").innerHTML+=student_array[b]+"<br>";

}

}