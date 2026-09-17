import express, {Application, Request, Response} from "express" ; 
// Load the route module at runtime so TypeScript does not include a file outside src in the compilation.
const carRoutes = require('../routes/cars').default;

const PORT = process.env.PORT || 3000; 

const app: Application = express(); 
app.use(express.json());
app.use('/api/v1/cars', carRoutes);

 app.get("/ping", async (_req : Request, res: Response) => { 

    res.json({ 
    message: "We're so passing this module", 
    }); 

}); 

 

app.listen(PORT, () => { 
    console.log("Server is running on port", PORT); 
    }); 