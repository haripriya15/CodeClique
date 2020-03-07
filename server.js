const express = require('express');

const app = express();

app.get('/',(req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

/*app.listen(PORT, () => console.log(`Server started on port s{PORT}`));*/

var listener = app.listen(PORT, function(){
    console.log('Server started on port ' + listener.address().port); 
});