import bcrypt from 'bcryptjs';
import User from '../models/User.js'

// registro
export async function registerUser(req, res) {
    if(req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido. '});
    }

    const { email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if(userExists) {
            return res.status(400).json({ message: 'El usuario ya existe.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // hashea la clave

        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        
        return res.status(201).json({ 
            message: 'Usuario registrado con éxito.',
            user: {
                    _id: newUser._id,
                    email: newUser.email
                }
            }
        );
    } catch(e) {
        console.error('Error en el registro:', e);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
}

// login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // bucamos el usuario
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "Usuario no encontrado." });

        // comparamos contraseñas
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta." });

        res.status(200).json({ 
            message: "Login exitoso.", 
            user: {
                _id: user._id,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor." });
    }
}