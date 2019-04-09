import React from 'react';
import http from '../../api';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const styles = {
  btnValidar: {
    borderRadius: '0',
    border: 'none',    
    width: '6em'
  }
};


class Validar extends React.Component {

  state = {
    value: '',
    option: ''
  }


  getValueInput = event => {    
    this.setState({ 
      value: event.target.value,
      option: event.target.id
    });    
  }


  async validar(option, value) {
    const response = await http.get(`${option}/validar/${value}`);
    console.log(response.data.data);    
  }
  
 
  render() {
    return (
      <div className="validar mt-5">

        <Container>
          <Row className="show-grid">
            <Col md={12}>

              <InputGroup className="mb-5">          
                <FormControl id="cpf" placeholder="Insira o CPF" onChange={this.getValueInput}/>
                <Button variant="secondary" style={styles.btnValidar} onClick={() => this.validar(this.state.option, this.state.value)}>Validar</Button>
              </InputGroup>

              <InputGroup className="mb-5">          
                <FormControl id="cnpj" placeholder="Insira o CNPJ" onChange={this.getValueInput}/>
                <Button variant="info" style={styles.btnValidar} onClick={() => this.validar(this.state.option, this.state.value)}>Validar</Button>
              </InputGroup>
              
            </Col>            
          </Row>
        </Container>
                
      </div>
    );
  };
}
  
export default Validar;