import React from 'react';
import http from '../../api'
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

  async validar (id, cpf) {
    const response = await http.get(`${id}/validar/${cpf}`);
    console.log(response.data);    
  }
 
  render() {
    return (
      <div className="validar mt-5">

        <Container>
          <Row className="show-grid">
            <Col md={12}>

              <InputGroup className="mb-5">          
                <FormControl id="cpf" placeholder="Insira o CPF" ref={input => this.cpf = input}/>
                <Button variant="secondary" style={styles.btnValidar} onClick={(event)=>this.validar('cpf', this.cpf.value)}>Validar</Button>
              </InputGroup>

              <InputGroup className="mb-5">          
                <FormControl placeholder="Insira o CNPJ"/>
                <Button type="submit" variant="info" style={styles.btnValidar}>Validar</Button>
              </InputGroup>
              
            </Col>            
          </Row>
        </Container>
                
      </div>
    );
  };
}
  
export default Validar;