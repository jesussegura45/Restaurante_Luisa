import { collection, doc, setDoc, getDocs } from 'firebase/firestore/lite';
import { FirebaseFirestore } from './Firebase';

const crearProducto = async (producto) => {
    const nuevoDoc = doc(collection(FirebaseFirestore, '/productos'));
    await setDoc(nuevoDoc, producto);
    console.log('producto creado');
}

const listarProductos = async () => {
    const productosRef = doc(collection(FirebaseFirestore, '/productos'));
    const docs = await getDocs(productosRef); 
    const productos = [];
    docs.forEach(document => {
        productos.push({ id: document.id, ...document.data() });
    });
    return productos;
}

export {
    crearProducto,
    listarProductos,
}