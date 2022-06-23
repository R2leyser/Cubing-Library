import methods from "./methods.json"

export class Methods 
{
    listTypes () 
    {
        const typeList:string[] = []
        for (let i = 0; i < methods.length; i++)
        {
            typeList.push(methods[i].methodType)
        }
        if(typeList){
            return typeList
        }
    }

    listMethods (methodType: string)
    {        
        var index:number = -1
        for (let i = 0; i < methods.length; i++)
        {
            if (methods[i].methodType == methodType)
            {
                console.log(methods[i].methodType)
                index = i
            }
        }

        if (index == -1){throw new Error(`${methodType} not supported`)}        
        
        const methodList: string[] = []
        for (let i in methods[index].list)
        {
            methodList.push(methods[index].list[i].name)
        }
        return methodList        
    }

    getTutorial(method:string){
        var index = 0
        var index2 = -1
        for (let i = 0; i < methods.length; i++)
        {
            for (let j = 0; j < methods[i].list.length; j++)
            {
                if (methods[i].list[j].name == method)
                {
                    index = i
                    index2 = j
                }
            }
        }
        
        if (index2 == -1){throw new Error(`${method} not supported`)}
        if (methods[index].list[index2].tutorial == ""){throw new Error(`There is no tutorial for ${method}`)}
    
        return methods[index].list[index2].tutorial            
    }
}