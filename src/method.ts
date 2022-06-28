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
        return typeList
    }

    listMethods (methodType: string)
    {   
        //gets index of the type     
        for (let i = 0; i < methods.length; i++)
        {
            if (methods[i].methodType == methodType)
            {
                //adds all the methods to a list
                const methodList: string[] = []
                for (let j in methods[i].list)
                {
                    methodList.push(methods[i].list[j].name)
                }
                return methodList
            }
        }

        throw new Error(`${methodType} not supported`)       
    }

    getTutorial(method:string){
        //iterates through types
        for (let i = 0; i < methods.length; i++)
        {   
            //iterates through methods to match the input
            for (let j = 0; j < methods[i].list.length; j++)
            {
                if (methods[i].list[j].name == method)
                {
                    if (methods[i].list[j].tutorial != "")
                    {
                        return methods[i].list[j].tutorial
                    }            
                    throw new Error(`There is no tutorial for ${method}`)
                }
            }
        }        
        throw new Error(`${method} not supported`)
    }
}