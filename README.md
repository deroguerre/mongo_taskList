{
        task:{
                id:'',
                name:'',
                date:'',
                label:''
        }
}

mongo
use tp_tasks

//VOIR LES DONNES
db.task.find()

//INSERER UNE DONNEE
db.task.insert({'name':'1er tache','date':'2017-06-06','label':'course'});