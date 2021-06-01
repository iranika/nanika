interface Cheer {
    imgsrc: string;
    texts: [string];
    type: string;
}

class Cheer implements Cheer {
    constructor(
        imgsrc = '',
        texts = [""] as [string],
        type = ''
    ) {
        this.imgsrc = imgsrc
        this.texts = texts
        this.type = type
    }
}

interface Cheers {
    id: string;
    Auther: string;
    Cheer: Array<Cheer>;
    Title: string;
}
  
class Cheers implements Cheers{
    constructor(){
        this.id = ""
        this.Auther = ""
        this.Cheer = [new Cheer()]
        this.Title = ""
    }
}
  


export {Cheer};
export {Cheers};