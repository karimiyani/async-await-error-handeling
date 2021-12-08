console.log("start");

function loginUser (email, password){
    return new Promise ((resolve, reject)=>{
        setTimeout ( () => {
            resolve ({ email });
        },3000);
    });
      
}
function getUserCourses (email){
    return new Promise ((resolve, reject)=>{
        setTimeout ( () => {
            resolve  (["course 1", "course 2", "course 3"]);
        },2000); 
    });
}
function getCourseDetail (id){
    return new Promise ((resolve, reject)=>{
        setTimeout ( () => {
            reject ( new Error ('this is error'))
        },1000);  
    });
}
console.log("end");
// const user = loginUser("gomnam@yahoo.com", 1234);




const displayCourseDetail = async ()=> {
    try{
        const user =await loginUser("gomnam@yahoo.com", 1234);
        console.log(user);
        const courses =await getUserCourses(user.email);
        console.log(courses);
        const detail =await getCourseDetail(courses[0]);
        console.log(detail);
    }
    catch (error){
        console.log(error.message);

    }
};
displayCourseDetail ();



// start
// end
// {email: 'gomnam@yahoo.com'}
// (3) ['course 1', 'course 2', 'course 3']
// this is error