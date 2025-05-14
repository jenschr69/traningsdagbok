app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(express.json());
app.use(express.static('public'));

// Add the users routes
app.use('/workouttypes', workouttypesRouter);

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:'+PORT);
});