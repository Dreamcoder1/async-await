const users = [{
  id:1,
  name:'andrew',
  schoolId:101
},{
  id:2,
  name:'jessica',
  schoolId:999

}];
const grades = [{
  id:1,
  schoolId: 101,
  grade : 86
},{
  id:2,
  schoolId: 999,
  grade : 100

},{
  id:3,
  schoolId: 231,
  grade : 78
}];
const getUser = (id) => {
  return new Promise((resolve,reject) => {
    const user = users.find((user) =>  user.id ===id);
    if (user) {
      resolve(user);
    }else {
      reject(`unable to find the user id of ${id}`);
    }
  });
};
const getGrades = (schoolId) => {
    return new Promise ((resolve,reject)  => {
      resolve(grades.filter((grade) => grade.schoolId === schoolId));
    });
};

const getStatus = (userId) => {
      let user;
     return getUser(userId).then((tempUser) => {
       user = tempUser;
       return getGrades(user.schoolId);
     }).then((grades)=> {
       let average = 0;
       if(grades.length >0) {
         average = grades.map((grade) => grade.grade).reduce((a, b) => a+b) / grades.length;
       }
       return `${user.name} has a average of ${average} in the class`;
      // console.log(average);
     });
};
const getStatusAlt = async (userId) => {
  const user = await getUser(uesrId);
  const grades = await getGrades(user.schoolId);
  let average = 0;
  if(grades.length >0) {
    average = grades.map((grade) => grade.grade).reduce((a, b) => a+b) / grades.length;
  }
  return `${user.name} has a average of ${average} in the class`;
//  return 'mike';
//console.log(user,grades);
};
//console.log(getStatusAlt());
getStatusAlt(1).then((praveen) => {
  console.log(praveen);
}).catch((e) =>{
  console.log(e);
});









//getGrades(999  ).then((grades) => {
//  console.log(grades);
//}).catch((e) => {
//  console.log(e);
//});
