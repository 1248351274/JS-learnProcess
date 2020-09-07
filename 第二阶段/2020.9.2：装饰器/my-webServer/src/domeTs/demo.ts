function dept(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log(target);
    console.log(propertyKey);
    
    console.log(descriptor.value);

    let constructor = target.constructor;
        
    if (!Array.isArray(constructor.__routes)) {
        constructor.__routes = [];
    }
    // console.log('get name',name,);
    constructor.__routes.push({
        verb: 'get'
    })
    let value = descriptor.value
    descriptor.value = function(){
        console.log('hahahah');
        return value()
    }
}

class Main {
    @dept
    ender(){
        console.log(234);
    }
}

let main = new Main()
main.ender()



