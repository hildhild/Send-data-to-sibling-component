import React, { useState } from 'react';
import Form from './components/Form'
import Display from './components/Display'


function App() {
    const [formData, setFormData] = useState(null);

    const handleFormSubmit = (data) => {
        setFormData(data);
    };

  
    return (
        <div className="grid grid-cols-2 h-full">
            <Form onFormSubmit={handleFormSubmit}></Form>
            {formData && <Display data={formData} />}
        </div>
    );
}

export default App;
