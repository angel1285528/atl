import React from 'react';
import bcrypt

class HashPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      hashedPassword: '',
    };
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  hashPassword = () => {
    const { password } = this.state;
    const saltRounds = 10; // Número de rondas de hashing
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.error('Error al hashear la contraseña:', err);
      } else {
        this.setState({ hashedPassword: hash });
      }
    });
  };

  render() {
    const { password, hashedPassword } = this.state;
    return (
      <div>
        <input
          type="password"
          value={password}
          onChange={this.handlePasswordChange}
          placeholder="Ingrese la contraseña"
        />
        <button onClick={this.hashPassword}>Hashear contraseña</button>
        {hashedPassword && (
          <div>
            <p>Contraseña hasheada:</p>
            <p>{hashedPassword}</p>
          </div>
        )}
      </div>
    );
  }
}

export default HashPassword;
