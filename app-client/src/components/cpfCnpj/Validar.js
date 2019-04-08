import React from 'react';
// import http from '../../api'
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

  validar(param){
    console.log(`Aqui: ${param}`);
  }
 
  render() {
    return (
      <div className="validar mt-5">

        <Container>
          <Row className="show-grid">
            <Col md={12}>

              <InputGroup className="mb-5">          
                <FormControl id="cpf" placeholder="Insira o CPF"/>
                <Button variant="secondary" style={styles.btnValidar} onClick={ () => this.validar('') }>Validar</Button>
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