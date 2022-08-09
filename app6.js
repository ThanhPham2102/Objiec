// let productIphone = [
//     {
//         name: "Sony Xperia XZ Premiun",
//         Brand: "sony",
//         Price: "4428",
//         Color: "White",
//         Category: "Phone"
//     },
//     {
//         name: "OPPO F3 Plus",
//         Brand: "OPPO",
//         Price: "5487",
//         Color: "Black",
//         Category: "Phone"
//     },
//     {
//         name: "IPhone 13 Pro Max",
//         Brand: "Apple",
//         Price: "21490",
//         Color: "Wray",
//         Category: "Phone"
//     },
//     {
//         name: "Samsung Galaxy S8",
//         Brand: "Samsung",
//         Price: "8490",
//         Color: "Blue",
//         Category: "Phone"
//     }
// ];
// console.log(productIphone);
// for (let i = 0; i <= productIphone.length - 1; i = i + 1) {

//     console.log(`---------------------------`)
//     console.log(`#${i}.name: ${productIphone[i].name}`);
//     console.log(`Price: ${productIphone[i].Price}`);





// }
// let TTSP = prompt('chon san pham so nao');
// for (i = 0; i <= productIphone.length - 1; i = i + 1) {
//     if (TTSP == i) {
//         console.log(`-------------------------------`)
//         console.log(`name: ${productIphone[i].name}`);
//         console.log(`Brand: ${productIphone[i].Brand}`);
//         console.log(`Price: ${productIphone[i].name}`);
//         console.log(`Color: ${productIphone[i].Color}`);
//         console.log(`Category: ${productIphone[i].Category}`);
//     }
// }

// // 1.3,1.4
// let tenSp = prompt(`ten dien thoai muon keim tra`);
// for (i = 0; i < productIphone.length; i = i + 1) {
//     //console.log(productIphone[i].Category)
//     if (tenSp === productIphone[i].Category) {
//         console.log(`----------------------------`)
//         console.log(`#${i}.name: ${productIphone[i].name}`);
//         console.log(`Price: ${productIphone[i].Price}`);
//     }
//     let providers= prompt(`nha cung cap san pham ${productIphone[i].name} la`);

//         productIphone[i].Providers = providers;
//         console.table( productIphone[i]);

// }
// // 1.5.
// let nhaCc = prompt(' banchon nha cung cap nao');
// for (i = 0; i < productIphone.length; i = i + 1) {
//     //console.log(productIphone[i].Category)
//     if (nhaCc === productIphone[i].Providers) {
//         console.log(`-------------------------------`)
//         console.log(`name: ${productIphone[i].name}`);
//         console.log(`Brand: ${productIphone[i].Brand}`);
//         console.log(`Price: ${productIphone[i].name}`);
//         console.log(`Color: ${productIphone[i].Color}`);
//         console.log(`Category: ${productIphone[i].Category}`);
//         console.log(`Provisers: ${productIphone[i].Providers}`);
//     }
   

// }



// bai2
// let learning= [
//     {
//         id: 1,
//         name: "HTML",
//         complete: 'false',
//         check : '[ ]'
//     },
//     {
//         id: 2,
//         name: "CSS",
//         complete: 'false',
//         check : '[ ]'  
//     },
//     {
//         id: 3,
//         name: "Bassic of javascript",
//         complete: 'false',
//         check : '[ ]'  
//     },
//     {
//         id: 4,
//         name: "Node Package Mannager",
//         complete: 'false',
//         check : '[ ]'  
//     },
//     {
//         id: 5,
//         name: "Git",
//         complete: 'false',
//         check : '[ ]'  
//     }
// ];
// for (i=1;i<= learning.length -1 ; i=i+1){
//     console.log(`${i+1}.${learning[i].name}`);
// console.log(`Complete: ${learning[i].complete}`)
// }


// bai2
//
let learning = [
    {
      id: 1,
      name: "HTML",
      complete: "false",
      check: "[ ]",
    },
    {
      id: 2,
      name: "CSS",
      complete: "false",
      check: "[ ]",
    },
    {
      id: 3,
      name: "Basic of javascript",
      complete: "false",
      check: "[ ]",
    },
    {
      id: 4,
      name: "Node package Manager (npm)",
      complete: "false",
      check: "[ ]",
    },
    {
      id: 5,
      name: "Git",
      complete: "false",
      check: "[ ]",
    },
  ];
  
  //2.2 add new
  while (true) {
    let command = prompt("Enter your command(New, Delete, Update, Complete)");
    if (command == "new") {
      let taskInput = prompt("Enter new task:");
      learning.push({
        id: learning.length + 1,
        name: taskInput,
        complete: false,
        check: "[ ]",
      });
      console.clear();
  
      for (let key in learning) {
        console.log(
          learning[key].id +
            "." +
            learning[key].name +
            "\n" +
            "Complete: " +
            learning[key].complete
        );
      }
      console.log("----------------------------");
  
      for (let key in learning) {
        console.log(
          learning[key].id + ". " + learning[key].check + " " + learning[key].name
        );
      } //2.3 update
    }
    if (command == "update") {
      let position = Number(prompt("Enter position "));
      let title = prompt("Enter new title");
      for (let key in learning) {
        if (position == learning[key].id) {
          learning[key].name = title;
          console.log(learning[key].name);
        }
      }
      console.clear();
      for (let key in learning) {
        console.log(
          learning[key].id +
            ". " +
            learning[key].name +
            "\n" +
            "Complete: " +
            learning[key].complete
        );
      }
      console.log("-------------------------------");
      for (let key in learning) {
        console.log(
          learning[key].id + ". " + learning[key].check + " " + learning[key].name
        );
      }
    }
    //2.4 complete
    if (command == "complete") {
      let position = Number(prompt("Nhập vị trí để hoàn thành"));
      for (let key in learning) {
        if (position == learning[key].id) {
          learning[key].complete = true;
          learning[key].check = "[x]";
        }
      }
      console.clear();
      for (let key in learning) {
        console.log(
          learning[key].id +
            ". " +
            learning[key].name +
            "\n" +
            "Complete: " +
            learning[key].complete
        );
      }
      console.log("----------------------------------------------------------");
      for (let key in learning) {
        console.log(
          learning[key].id + ". " + learning[key].check + " " + learning[key].name
        );
      }
    }
    if (command == "d") {
      let position = Number(prompt("Nhập vị trí muốn xóa"));
      for (let key in learning) {
        if (position == learning[key].id) {
          delete learning[key];
        }
      }
      console.clear();
      for (let key in learning) {
        console.log(
  learning[key].id +
            ". " +
            learning[key].name +
            "\n" +
            "Complete: " +
            learning[key].complete
        );
      }
      console.log("----------------------------------------------------------");
      for (let key in learning) {
        console.log(
          learning[key].id + ". " + learning[key].check + " " + learning[key].name
        );
      }
    } else if (command == "e") {
      break;
    }
  }