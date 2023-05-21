
//defined a class-it is a template used to create object.
class Customer{

    //To create an object
    constructor(customer_id,store_id,first_name,last_name,email,address_id){
        this.customer_id=customer_id;
        this.store_id=store_id;
        this.first_name=first_name;
        this.last_name=last_name;
        this.email=email;
        this.address_id=address_id;
        this.mobile_number='';
        console.log("Inside customer class constructor.Completed creating an object.")
    }

    //methods
}


function test_function(){
    // var customer1 = new Customer(524,1,'Jared','Ely','jared.ely@sakilacustomer.org',530); //creating objecting
    var customer1 = new Customer(524,1,'Jared','','jared.ely@sakilacustomer.org',530); //creating objecting
    console.log(customer1);
    //console.log("Inside test_function");
    var customer2 = new Customer(1,1,'Mary','Smith','mary.smith@sakilacustomer.org',5); 
    console.log(customer2);
    var customer3 = new Customer(2,1,'Patricia','Johnson','patricia.johnson@sakilacustomer.org',6); 
    console.log(customer3);
    var customer4 = new Customer(3,1,'Linda','Williams','linda.williams@sakilacustomer.org',7); 
    console.log(customer4);
    var customer5 = new Customer(4,2,'Barbara','Jones','barbara.jones@sakilacustomer.org',8); 
    console.log(customer5);
    var customer6 = new Customer(5,1,'Elizabeth','Brown','elizabeth.brown@sakilacustomer.org',9); 
    console.log(customer6);
    var customer7 = new Customer(6,2,'Jennifer','Davis','jennifer.davis@sakilacustomer.org',10); 
    console.log(customer7);
    var customer8 = new Customer(7,1,'Maria','Miller','maria.miller@sakilacustomer.org',11); 
    console.log(customer8);
    var customer9 = new Customer(8,2,'Susan','Wilson','susan.wilson@sakilacustomer.org',12); 
    console.log(customer9);
    var customer10 = new Customer(9,2,'Margaret','Moore','margaret.moore@sakilacustomer.org',13); 
    console.log(customer10);

    var arr3=new Array(100,200,300,400);  //array of numbers
    console.log(arr3);

    var customer_arr=new Array(customer1,customer2,customer3); //array of customer objects
    console.log(customer_arr);
    console.log("\n\n");
    console.log(customer_arr[0]);

 }

 /* To represent array
    var arr1=[ 100, 200, 300, 400]
    var arr2=new Array()
    arr2[0]=100
    arr2[1]=200
    arr2[2]=300
    arr2[3]=400

    var arr3=new Array(100,200,300,400)*/
