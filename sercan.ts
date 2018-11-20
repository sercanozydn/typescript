enum Humans{
    Woman,Man
   }
   interface choosingHumans{
       PersonM: string;
       PersonW: string;
   }
    var PersonM : string='Woman';
    var AersonW : string='Man';

class PickHumans {
    Say(): string {
        switch (this.constructor["name"]) {
            case "Woman":
                return "Long Hair";
            case "Man":
                return "Short Hair";
        }
    }
}
 
class Woman extends PickHumans {
 
}
 
class Man extends PickHumans {
 
}
 
let Woman = new woman();
let Man = new man();
 
console.log(Woman.Say())
console.log(Man.Say())