const mongoose = require("mongoose")
mongoose.set('strictQuery', true);


// 1.Create Database named 'test'
mongoose.connect("mongodb://127.0.0.1:27017/APPI_DATA").then(() => console.log("Mongoose is running")).catch((err) => console.log(err))


// 2.Documents field's datatype setting in advcence as what they expect
const playListSCHEMA = new mongoose.Schema(
    {
        name: String,
        sex: String,
        age: Number,
        DOB: String,
        Married: Boolean
    }
)
// 3.COllection creation / row creation
const PlayList = new mongoose.model("PlayList", playListSCHEMA)


// 4.Adding data into the collection created

const dataFill = async () => {
    // ##########    NEW WAY TO ADD DATA IN COLLECtiONS
    // 1.createing data
    const ss = await PlayList.create(
        {

            name: "apoorv",
            sex: "male",
            age: 24,
            DOB: "OCT-3",
            Married: false


        })
    const second = await PlayList.create(
        {

            name: "ankit",
            sex: "male",
            age: 20,
            DOB: "DEC-25",
            Married: false


        })


    // 2.read data
    // const ss = await PlayList.find()
    // console.log(ss);



    //##########################  OLD WAY TO ADD DATA


    // const ss = new PlayList({
    //     name: "apoorv",
    //     sex: "male",
    //     age: 24,
    //     DOB: "OCT-3",
    //     Married: false
    // })
    // await ss.save()

    // if want to save number of documents
    // await ss.inserMany([name1,name2,...])

}
dataFill()
