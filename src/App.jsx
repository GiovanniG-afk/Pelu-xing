import React, { useState, useEffect } from 'react';
import { 
  Home, User, Search, ShoppingBag, Heart, Menu, X, 
  ChevronRight, Moon, Sun, Palette, Globe, Star,
  Package, ShieldAlert, LogOut, CheckCircle2, AlertCircle,
  Truck, Plus, Edit2, Trash2, Gift, MessageCircle, 
  Filter, ArrowLeft, CreditCard, Lock, Send, History, MapPin,
  Settings, Camera, Save, Tag, Users, Info, Percent,
  Phone, Mail, HelpCircle, Bell, Database, Trash, MessageSquare, Grid
} from 'lucide-react';

const translations = {
  es: {
    loading: "Preparando abrazos...", login: "Iniciar Sesión", register: "Crear Cuenta",
    email: "Correo Electrónico", password: "Contraseña", enter: "Entrar",
    name: "Nombre Completo", confirm_pass: "Confirmar Contraseña",
    no_account: "¿No tienes cuenta? Regístrate", already_account: "¿Ya tienes cuenta? Inicia sesión",
    empty_fields: "Por favor, completa todos los campos", pass_mismatch: "Las contraseñas no coinciden",
    invalid_creds: "Credenciales inválidas", reg_success: "Cuenta creada con éxito",
    home: "Inicio", catalog: "Catálogo", wishlist: "Deseos", cart: "Carrito", profile: "Mi Perfil",
    admin: "Panel Admin", search_placeholder: "Buscar peluches...", categories: "Categorías",
    popular: "Más Populares", new_arrivals: "Nuevos", price: "Precio",
    add_to_cart: "Agregar", buy_now: "Comprar ahora", reviews: "reseñas", orders: "Mis Pedidos",
    settings: "Configuración", appearance: "Apariencia", language: "Idioma", dark_mode: "Modo Oscuro",
    theme_color: "Color de Acento", checkout: "Proceder al pago", total: "Total",
    coupon: "¿Tienes un cupón?", apply: "Aplicar", pending: "Pendiente", shipped: "Enviado",
    delivered: "Entregado", admin_dashboard: "Dashboard Admin", revenue: "Ingresos", users: "Usuarios",
    manage_products: "Productos", add_product: "Nuevo Producto", logout: "Cerrar sesión",
    empty_cart: "Tu carrito está vacío", empty_wishlist: "Aún no tienes favoritos",
    chat_support: "Soporte Pelu-Bot", type_message: "Escribe...", history: "Historial de vistas", sort: "Ordenar",
    size: "Tamaño", color: "Color", stock: "Stock", description: "Descripción",
    shipping_info: "Datos de Envío", payment_method: "Método de Pago", confirm_order: "Confirmar Pedido", 
    order_success: "¡Pedido completado!", address_req: "Debes llenar tu dirección y ciudad", payment_req: "Llena los datos de la tarjeta",
    edit_profile: "Editar Perfil", save_changes: "Guardar Cambios", create_product: "Crear Peluche", 
    edit_product: "Editar Peluche", product_name: "Nombre del producto", category: "Categoría", image_url: "URL de Imagen",
    about_us: "Nosotros", mission: "Nuestra Misión", vision: "Nuestra Visión", creators: "Creadores", login_to_continue: "Inicia sesión para continuar", guest: "Invitado", special_offer: "OFERTA", discount_price: "Precio Oferta",
    help_center: "Centro de Ayuda", faq: "Preguntas Frecuentes", contact: "Contacto", notifications: "Notificaciones", push_notif: "Notificaciones Push", email_notif: "Correos Promocionales", security: "Privacidad y Seguridad", two_factor: "Autenticación de 2 Pasos", clear_cache: "Borrar Caché", data_storage: "Datos y Almacenamiento", delete_account: "Eliminar Cuenta"
  },
  en: {
    loading: "Preparing hugs...", login: "Login", register: "Sign Up",
    email: "Email", password: "Password", enter: "Enter",
    name: "Full Name", confirm_pass: "Confirm Password",
    no_account: "Don't have an account? Sign up", already_account: "Already have an account? Login",
    empty_fields: "Fill all fields", pass_mismatch: "Passwords don't match",
    invalid_creds: "Invalid credentials", reg_success: "Account created",
    home: "Home", catalog: "Catalog", wishlist: "Wishlist", cart: "Cart", profile: "Profile",
    admin: "Admin Panel", search_placeholder: "Search plushies...", categories: "Categories",
    popular: "Popular", new_arrivals: "New", price: "Price",
    add_to_cart: "Add", buy_now: "Buy now", reviews: "reviews", orders: "My Orders",
    settings: "Settings", appearance: "Appearance", language: "Language", dark_mode: "Dark Mode",
    theme_color: "Accent Color", checkout: "Checkout", total: "Total",
    coupon: "Coupon?", apply: "Apply", pending: "Pending", shipped: "Shipped",
    delivered: "Delivered", admin_dashboard: "Dashboard", revenue: "Revenue", users: "Users",
    manage_products: "Products", add_product: "New Product", logout: "Logout",
    empty_cart: "Cart is empty", empty_wishlist: "No favorites yet",
    chat_support: "Pelu-Bot Support", type_message: "Type...", history: "History", sort: "Sort",
    size: "Size", color: "Color", stock: "Stock", description: "Description",
    shipping_info: "Shipping Info", payment_method: "Payment Method", confirm_order: "Confirm Order", 
    order_success: "Order completed!", address_req: "Fill your address", payment_req: "Fill payment details",
    edit_profile: "Edit Profile", save_changes: "Save", create_product: "Create Plushie", 
    edit_product: "Edit Plushie", product_name: "Product Name", category: "Category", image_url: "Image URL",
    about_us: "About Us", mission: "Our Mission", vision: "Our Vision", creators: "Creators", login_to_continue: "Login to continue", guest: "Guest", special_offer: "SALE", discount_price: "Sale Price",
    help_center: "Help Center", faq: "FAQ", contact: "Contact", notifications: "Notifications", push_notif: "Push Notifications", email_notif: "Promotional Emails", security: "Privacy & Security", two_factor: "Two-Factor Auth", clear_cache: "Clear Cache", data_storage: "Data & Storage", delete_account: "Delete Account"
  }
};

const themeColors = {
  pink: { hex: '#f472b6', text: 'text-pink-500', bg: 'bg-pink-500', bgLight: 'bg-pink-100', border: 'border-pink-500', ring: 'ring-pink-500', shadow: 'shadow-pink-500/40' },
  blue: { hex: '#38bdf8', text: 'text-sky-500', bg: 'bg-sky-500', bgLight: 'bg-sky-100', border: 'border-sky-500', ring: 'ring-sky-500', shadow: 'shadow-sky-500/40' },
  mint: { hex: '#34d399', text: 'text-emerald-500', bg: 'bg-emerald-500', bgLight: 'bg-emerald-100', border: 'border-emerald-500', ring: 'ring-emerald-500', shadow: 'shadow-emerald-500/40' },
  lavender: { hex: '#a78bfa', text: 'text-purple-500', bg: 'bg-purple-500', bgLight: 'bg-purple-100', border: 'border-purple-500', ring: 'ring-purple-500', shadow: 'shadow-purple-500/40' }
};

const initialUsers = [
  { id: 'u1', email: 'admin@peluxing.com', password: '123', role: 'admin', name: 'Admin Supremo', avatar: '' },
  { id: 'u2', email: 'user@correo.com', password: '123', role: 'user', name: 'Usuario Kawaii', avatar: '' }
];

const initialProducts = [
  { id: 1, name: 'Pulpito Reversible', price: 12.99, isOffer: false, discountPrice: 0, rating: 4.8, stock: 45, category: 'Anime', isNew: true, description: 'El clásico pulpito que muestra tus emociones.', images: ['https://images.unsplash.com/photo-1618666012174-83b441c0bc76?auto=format&fit=crop&w=600&q=80'], variants: { sizes: ['Pequeño', 'Mediano'], colors: ['Rosa/Azul', 'Gris/Negro'] }, reviews: [{ user: 'Ana', text: '¡Me encanta!', stars: 5 }] },
  { id: 2, name: 'Oso Pardo Gigante', price: 65.00, isOffer: true, discountPrice: 45.00, rating: 4.9, stock: 12, category: 'Clásicos', isNew: false, description: 'Un abrazo gigante en forma de oso. ¡Aprovecha la rebaja!', images: ['https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=600&q=80'], variants: { sizes: ['1 Metro', '1.5 Metros'], colors: ['Café Claro', 'Marrón Oscuro'] }, reviews: [] },
  { id: 3, name: 'Dinosaurio Rex Suave', price: 18.50, isOffer: false, discountPrice: 0, rating: 4.5, stock: 5, category: 'Animales', isNew: true, description: 'Un T-Rex que no asusta, ¡solo quiere abrazos!', images: ['https://images.unsplash.com/photo-1598256989495-2eb49e2dc11a?auto=format&fit=crop&w=600&q=80'], variants: { sizes: ['Mediano'], colors: ['Verde Menta'] }, reviews: [] },
  { id: 4, name: 'Conejito Orejas Largas', price: 15.00, isOffer: false, discountPrice: 0, rating: 4.7, stock: 30, category: 'Anime', isNew: false, description: 'Compañero ideal para dormir.', images: ['https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80'], variants: { sizes: ['Pequeño'], colors: ['Blanco', 'Rosado'] }, reviews: [] },
];

export default function App() {
  // Estados de Interfaz y Configuración
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [accent, setAccent] = useState('pink');
  const [lang, setLang] = useState('es');
  
  // La App INICIA EN HOME (Modo invitado) para que puedan ver productos sin cuenta.
  const [activeTab, setActiveTab] = useState('home'); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Sistema de Toasts y Chatbot
  const [toast, setToast] = useState(null); 
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([{sender: 'bot', text: '¡Hola! Soy Pelu-Bot 🤖 ¿En qué puedo ayudarte?'}]);

  // Estados de Base de Datos / Lógica de Negocio
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState(null); // NULL = Invitado
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([1]);
  const [orders, setOrders] = useState([]);
  const [history, setHistory] = useState([]);

  // Sub-estados de vistas
  const [viewingProduct, setViewingProduct] = useState(null);
  const [checkoutStep, setCheckoutStep] = useState(0); 
  const [adminView, setAdminView] = useState('dashboard');
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const [shippingForm, setShippingForm] = useState({ name: '', address: '', city: '' });
  const [paymentForm, setPaymentForm] = useState({ card: '', expiry: '', cvc: '' });

  const t = translations[lang];
  const color = themeColors[accent];

  // Loader Effect
  useEffect(() => { setTimeout(() => setIsLoading(false), 2000); }, []);

  const showToast = (msg, type = 'success') => { 
    setToast({msg, type}); 
    setTimeout(() => setToast(null), 3500); 
  };
  
  const handleLogin = (email, pass) => {
    if(!email || !pass) return showToast(t.empty_fields, 'error');
    const user = users.find(u => u.email === email && u.password === pass);
    if (user) { 
      setCurrentUser(user); 
      setShippingForm({...shippingForm, name: user.name});
      setActiveTab('home'); 
      showToast(`¡Bienvenido de vuelta, ${user.name}!`); 
    } else { 
      showToast(t.invalid_creds, 'error'); 
    }
  };

  const handleRegister = (name, email, pass, confirmPass) => {
    if(!name || !email || !pass || !confirmPass) return showToast(t.empty_fields, 'error');
    if(pass !== confirmPass) return showToast(t.pass_mismatch, 'error');
    const exists = users.find(u => u.email === email);
    if(exists) return showToast("El correo ya está registrado", 'error');
    
    // Rol USER siempre al registrarse externamente por seguridad
    const newUser = { id: `u${Date.now()}`, name, email, password: pass, role: 'user', avatar: '' };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    setShippingForm({...shippingForm, name: newUser.name});
    setActiveTab('home');
    showToast(t.reg_success, 'success');
  };

  const logout = () => { setCurrentUser(null); setActiveTab('home'); setCart([]); setIsSidebarOpen(false); setIsChatOpen(false); };

  const handleUpdateProfile = (updatedData) => {
    const updatedUser = { ...currentUser, ...updatedData };
    setCurrentUser(updatedUser);
    setUsers(users.map(u => u.id === currentUser.id ? updatedUser : u));
    showToast("Perfil actualizado correctamente");
    setActiveTab('profile');
  };

  const addToCart = (product, size, colorSelection, qty) => {
    // Si el producto está en oferta, usamos el precio de oferta para el carrito
    const activePrice = product.isOffer ? product.discountPrice : product.price;

    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === size && item.color === colorSelection);
      if (existing) return prev.map(item => item === existing ? { ...item, qty: item.qty + qty } : item);
      return [...prev, { ...product, size, color: colorSelection, qty, cartPrice: activePrice }];
    });
    showToast(`${product.name} agregado al carrito`);
    setActiveTab('cart'); setCheckoutStep(0);
  };

  const processCheckout = () => {
    const newOrder = { 
      id: `PX-${Math.floor(Math.random()*10000)}`, date: new Date().toISOString().split('T')[0], 
      total: cart.reduce((sum, item) => sum + ((item.cartPrice || item.price) * item.qty), 0), status: 'pending', items: cart 
    };
    setOrders([newOrder, ...orders]);
    setCart([]);
    setShippingForm({ name: currentUser?.name || '', address: '', city: '' });
    setPaymentForm({ card: '', expiry: '', cvc: '' });
    setCheckoutStep(3);
  };

  const openProduct = (p) => {
    setViewingProduct(p);
    setHistory(prev => [p, ...prev.filter(item=>item.id!==p.id)].slice(0,6));
  };

  const bgMain = isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#fff5f8] text-slate-800';
  const bgCard = isDarkMode ? 'bg-slate-900' : 'bg-white';
  const borderSubtle = isDarkMode ? 'border-slate-800' : 'border-slate-200';
  const textSubtle = isDarkMode ? 'text-slate-400' : 'text-slate-500';

  if (isLoading) return <SplashScreen color={color} t={t} isDarkMode={isDarkMode} />;
  
  if (activeTab === 'auth' && !currentUser) {
    return <AuthScreen onLogin={handleLogin} onRegister={handleRegister} onBack={() => setActiveTab('home')} color={color} t={t} isDarkMode={isDarkMode} bgCard={bgCard} bgMain={bgMain} borderSubtle={borderSubtle} toast={toast} />;
  }

  return (
    <div className={`flex justify-center w-full min-h-screen ${isDarkMode ? 'bg-black' : 'bg-slate-200'} sm:p-4 transition-colors font-sans`}>
      <div className={`w-full sm:max-w-md h-[100dvh] sm:h-[850px] relative overflow-hidden flex flex-col sm:rounded-[2.5rem] shadow-2xl ${bgMain} ${borderSubtle} sm:border-8`}>
        
        {/* HEADER */}
        <header className={`px-5 pt-12 pb-4 ${bgCard} shadow-sm z-20 flex items-center justify-between gap-4 transition-colors rounded-b-3xl`}>
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSidebarOpen(true)} className={`p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors`}>
              <Menu size={24} />
            </button>
            <h1 className={`text-xl font-black tracking-tight ${color.text} flex items-center gap-2`}>
              <Gift size={20} /> Pelu-xing
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-full ${color.bgLight} ${color.text} flex items-center justify-center font-bold text-sm border-2 ${color.border} overflow-hidden cursor-pointer`} onClick={() => currentUser ? setActiveTab('profile') : setActiveTab('auth')}>
              {currentUser?.avatar ? <img src={currentUser.avatar} className="w-full h-full object-cover"/> : (currentUser ? currentUser.name.charAt(0).toUpperCase() : <User size={16}/>)}
            </div>
          </div>
        </header>

        {/* CONTENIDO SCROLLABLE */}
        <main className="flex-1 overflow-y-auto scroll-smooth pb-24 relative">
          
          {/* TOAST FLOTANTE */}
          {toast && (
            <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-fade-in w-max max-w-[90%] pointer-events-none">
              <div className={`${toast.type === 'error' ? 'bg-red-500' : color.bg} text-white px-5 py-3 rounded-full shadow-lg text-sm font-bold flex items-center gap-2`}>
                {toast.type === 'error' ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />} 
                {toast.msg}
              </div>
            </div>
          )}

          {/* VISTA OVERLAY: DETALLE PRODUCTO */}
          {viewingProduct && (
            <ProductDetailView 
              product={viewingProduct} color={color} bgCard={bgCard} bgMain={bgMain} isDarkMode={isDarkMode} borderSubtle={borderSubtle} t={t} textSubtle={textSubtle}
              onClose={() => setViewingProduct(null)} onAdd={addToCart}
              isLiked={currentUser ? wishlist.includes(viewingProduct.id) : false} onLike={() => currentUser ? setWishlist(p => p.includes(viewingProduct.id) ? p.filter(id => id !== viewingProduct.id) : [...p, viewingProduct.id]) : setActiveTab('auth')}
            />
          )}

          <div className={`p-5 ${viewingProduct ? 'hidden' : 'block'}`}>
            
            {/* VISTA: HOME */}
            {activeTab === 'home' && (
              <div className="animate-fade-in flex flex-col gap-6">
                <div className={`flex items-center gap-2 px-4 py-3 rounded-2xl ${bgCard} shadow-sm border ${borderSubtle}`}>
                  <Search size={20} className={textSubtle} />
                  <input type="text" placeholder={t.search_placeholder} onClick={() => { setSelectedCategory('Todos'); setActiveTab('catalog'); }} className="bg-transparent outline-none w-full text-sm" readOnly/>
                </div>

                <div className={`w-full h-44 rounded-3xl ${color.bg} relative overflow-hidden flex flex-col justify-center p-6 shadow-lg ${color.shadow}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full -mr-10 -mt-10 blur-xl"></div>
                  <span className="text-xs font-black uppercase tracking-wider text-white bg-black/20 px-3 py-1 rounded-full w-max mb-2">Nueva Colección</span>
                  <h2 className="text-2xl font-bold text-white mb-1 leading-tight">Abrazos<br/>Infinitos</h2>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-3">
                    <h3 className="text-lg font-bold">{t.popular}</h3>
                    <span onClick={() => { setSelectedCategory('Todos'); setActiveTab('catalog'); }} className={`text-sm font-bold ${color.text} cursor-pointer`}>Ver todos</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {products.slice(0, 4).map(p => (
                      <ProductCard key={p.id} product={p} color={color} bgCard={bgCard} borderSubtle={borderSubtle} isDarkMode={isDarkMode} isLiked={currentUser ? wishlist.includes(p.id) : false} onLike={() => currentUser ? setWishlist(prev => prev.includes(p.id) ? prev.filter(id=>id!==p.id) : [...prev, p.id]) : setActiveTab('auth')} onClick={() => openProduct(p)} t={t} />
                    ))}
                  </div>
                </div>

                {history.length > 0 && (
                  <div className="mt-2">
                    <h3 className="text-sm font-bold mb-3 flex items-center gap-2 uppercase tracking-wider text-slate-500"><History size={16}/> {t.history}</h3>
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                      {history.map(p => (
                        <div key={`hist-${p.id}`} onClick={() => openProduct(p)} className={`min-w-[90px] ${bgCard} rounded-2xl p-2 border ${borderSubtle} cursor-pointer shadow-sm`}>
                          {/* Defensive rendering for image */}
                          <img src={p.images?.[0] || ''} className="w-full h-16 object-cover rounded-xl mb-2 bg-slate-100"/>
                          <p className="text-[10px] font-bold line-clamp-1">{p.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* VISTA: CATALOGO */}
            {activeTab === 'catalog' && (
              <div className="animate-fade-in flex flex-col gap-4">
                <div className="flex gap-2">
                  <div className={`flex-1 flex items-center gap-2 px-4 py-3 rounded-2xl ${bgCard} shadow-sm border ${borderSubtle} focus-within:${color.border}`}>
                    <Search size={20} className={textSubtle} />
                    <input type="text" placeholder={t.search_placeholder} className="bg-transparent outline-none w-full text-sm" />
                  </div>
                  <button className={`p-3 rounded-2xl ${bgCard} border ${borderSubtle} ${color.text} shadow-sm`}><Filter size={20}/></button>
                </div>
                
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                   {['Todos', 'Anime', 'Clásicos', 'Animales', 'Gigantes', 'Sanrio', 'Disney', 'Películas', 'Series'].map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-colors ${selectedCategory === cat ? `${color.bg} text-white shadow-md` : `${bgCard} text-slate-500 border ${borderSubtle}`}`}
                      >
                        {cat}
                      </button>
                   ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {products.filter(p => selectedCategory === 'Todos' || p.category === selectedCategory).map(p => (
                    <ProductCard key={p.id} product={p} color={color} bgCard={bgCard} borderSubtle={borderSubtle} isDarkMode={isDarkMode} isLiked={currentUser ? wishlist.includes(p.id) : false} onLike={() => currentUser ? setWishlist(prev => prev.includes(p.id) ? prev.filter(id=>id!==p.id) : [...prev, p.id]) : setActiveTab('auth')} onClick={() => openProduct(p)} t={t} />
                  ))}
                </div>
              </div>
            )}

            {/* VISTA: CATEGORIAS */}
            {activeTab === 'categories' && (
              <div className="animate-fade-in flex flex-col gap-4 h-full pb-10">
                <h2 className="text-2xl font-black mb-2 flex items-center gap-2"><Grid className={color.text}/> {t.categories}</h2>
                <div className="grid grid-cols-2 gap-4">
                  {['Anime', 'Clásicos', 'Animales', 'Gigantes', 'Sanrio', 'Disney', 'Películas', 'Series'].map(cat => {
                     const catProducts = products.filter(p => p.category === cat);
                     const image = catProducts.length > 0 && catProducts[0].images ? catProducts[0].images[0] : '';
                     return (
                       <div
                         key={cat}
                         onClick={() => { setSelectedCategory(cat); setActiveTab('catalog'); }}
                         className={`${bgCard} rounded-3xl border ${borderSubtle} overflow-hidden shadow-sm flex flex-col cursor-pointer hover:shadow-md transition-shadow hover:-translate-y-1 transform duration-300`}
                       >
                         <div className="h-32 w-full bg-slate-100 dark:bg-slate-800 p-2">
                            {image ? <img src={image} className="w-full h-full object-cover rounded-2xl opacity-90" /> : <div className="w-full h-full bg-slate-200 dark:bg-slate-700 rounded-2xl" />}
                         </div>
                         <div className="p-4 text-center">
                           <h3 className="font-bold text-sm">{cat}</h3>
                           <p className={`text-[10px] font-bold uppercase tracking-wider ${textSubtle} mt-1`}>{catProducts.length} Productos</p>
                         </div>
                       </div>
                     );
                  })}
                </div>
              </div>
            )}

            {/* VISTA: CARRITO */}
            {activeTab === 'cart' && (
              <div className="animate-fade-in flex flex-col h-full min-h-[60vh]">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><ShoppingBag className={color.text} /> {checkoutStep === 0 ? t.cart : t.checkout}</h2>
                
                {cart.length > 0 && (
                  <div className="flex items-center justify-between mb-8 relative px-2">
                    <div className="absolute top-1/2 left-4 right-4 h-1 bg-slate-200 dark:bg-slate-800 -z-10 -translate-y-1/2 rounded-full"></div>
                    <div className={`absolute top-1/2 left-4 h-1 ${color.bg} -z-10 -translate-y-1/2 rounded-full transition-all duration-500`} style={{width: `calc(${(checkoutStep/3)*100}% - 2rem)`}}></div>
                    {[ShoppingBag, MapPin, CreditCard, CheckCircle2].map((Icon, idx) => (
                      <div key={idx} className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${checkoutStep >= idx ? `${color.bg} text-white shadow-md` : 'bg-slate-200 text-slate-400 dark:bg-slate-800'}`}>
                        <Icon size={14} />
                      </div>
                    ))}
                  </div>
                )}

                {cart.length === 0 && checkoutStep === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center opacity-50 mt-16">
                    <ShoppingBag size={80} className="mb-4" />
                    <p className="text-lg font-medium">{t.empty_cart}</p>
                    <button onClick={() => setActiveTab('catalog')} className={`mt-6 px-6 py-2 rounded-full ${color.bgLight} ${color.text} font-bold`}>Ir al catálogo</button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 flex-1">
                    {/* Flujo de Checkout Controlado */}
                    {checkoutStep === 0 && <CartReview cart={cart} setCart={setCart} onCheckout={() => currentUser ? setCheckoutStep(1) : setActiveTab('auth')} color={color} bgCard={bgCard} borderSubtle={borderSubtle} textSubtle={textSubtle} t={t} />}
                    {checkoutStep === 1 && <CheckoutShipping form={shippingForm} setForm={setShippingForm} onNext={() => {
                        if(!shippingForm.name || !shippingForm.address || !shippingForm.city) return showToast(t.address_req, 'error');
                        setCheckoutStep(2);
                      }} onBack={() => setCheckoutStep(0)} color={color} bgCard={bgCard} borderSubtle={borderSubtle} t={t} />}
                    {checkoutStep === 2 && <CheckoutPayment form={paymentForm} setForm={setPaymentForm} onNext={() => {
                        if(!paymentForm.card || !paymentForm.expiry || !paymentForm.cvc) return showToast(t.payment_req, 'error');
                        processCheckout();
                      }} onBack={() => setCheckoutStep(1)} color={color} bgCard={bgCard} borderSubtle={borderSubtle} t={t} />}
                    {checkoutStep === 3 && (
                      <div className="flex-1 flex flex-col items-center justify-center text-center mt-10">
                        <div className={`w-24 h-24 rounded-full ${color.bgLight} ${color.text} flex items-center justify-center mb-6 animate-bounce`}>
                          <CheckCircle2 size={48} />
                        </div>
                        <h2 className="text-2xl font-black mb-2">{t.order_success}</h2>
                        <p className={textSubtle}>Tu pedido ha sido procesado con seguridad.</p>
                        <button onClick={() => {setCheckoutStep(0); setActiveTab('profile');}} className={`mt-8 px-8 py-3 rounded-full ${color.bg} text-white font-bold shadow-lg`}>
                          Ver Mis Pedidos
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* VISTA: PERFIL */}
            {activeTab === 'profile' && currentUser && (
              <ProfileView 
                user={currentUser} orders={orders} color={color} bgCard={bgCard} borderSubtle={borderSubtle} 
                textSubtle={textSubtle} t={t} onEditProfile={() => setActiveTab('edit_profile')}
              />
            )}

            {/* VISTA: EDITAR PERFIL */}
            {activeTab === 'edit_profile' && currentUser && (
              <EditProfileView 
                user={currentUser} onSave={handleUpdateProfile} onBack={() => setActiveTab('profile')}
                color={color} bgCard={bgCard} borderSubtle={borderSubtle} textSubtle={textSubtle} t={t} showToast={showToast}
              />
            )}

            {/* VISTA: NOSOTROS (Misión, Visión) */}
            {activeTab === 'about' && (
              <div className="animate-fade-in flex flex-col gap-6 pb-10">
                <h2 className="text-2xl font-black mb-2 flex items-center gap-2"><Info className={color.text} /> {t.about_us}</h2>
                
                <div className={`${bgCard} border ${borderSubtle} p-6 rounded-3xl shadow-sm`}>
                  <h3 className={`text-lg font-black mb-2 ${color.text}`}>{t.mission}</h3>
                  <p className={`text-sm leading-relaxed ${textSubtle}`}>[Edita aquí tu misión: Ejemplo: Brindar los peluches más tiernos y de mejor calidad para llenar de alegría el corazón de nuestros clientes...]</p>
                </div>

                <div className={`${bgCard} border ${borderSubtle} p-6 rounded-3xl shadow-sm`}>
                  <h3 className={`text-lg font-black mb-2 ${color.text}`}>{t.vision}</h3>
                  <p className={`text-sm leading-relaxed ${textSubtle}`}>[Edita aquí tu visión: Ejemplo: Ser la plataforma líder a nivel nacional en la venta y distribución de artículos kawaii y peluches...]</p>
                </div>

                <div>
                  <h3 className={`text-lg font-black mb-4 flex items-center gap-2`}><Users className={color.text} /> {t.creators}</h3>
                  <div className="flex flex-col gap-4">
                    {[1, 2, 3].map(num => (
                      <div key={num} className={`${bgCard} border ${borderSubtle} p-4 rounded-3xl shadow-sm flex items-center gap-4`}>
                        <div className={`w-16 h-16 rounded-2xl ${color.bgLight} flex items-center justify-center font-black text-2xl ${color.text}`}>
                          {num}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg leading-tight mb-1">[Nombre Creador {num}]</h4>
                          <p className={`text-xs font-bold uppercase tracking-wider ${textSubtle}`}>[Rol / Cargo {num}]</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* VISTA: WISHLIST */}
            {activeTab === 'wishlist' && (
              <div className="animate-fade-in flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Heart className={color.text} fill="currentColor" /> {t.wishlist}</h2>
                {wishlist.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center opacity-50 mt-16">
                    <Heart size={64} className="mb-4" />
                    <p className="font-medium">{t.empty_wishlist}</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    {products.filter(p => wishlist.includes(p.id)).map(p => (
                      <ProductCard key={p.id} product={p} color={color} bgCard={bgCard} borderSubtle={borderSubtle} isDarkMode={isDarkMode} isLiked={true} onLike={() => setWishlist(prev => prev.filter(id=>id!==p.id))} onClick={() => openProduct(p)} t={t} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* VISTA: SETTINGS */}
            {activeTab === 'settings' && (
              <SettingsView 
                isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} accent={accent} setAccent={setAccent}
                themeColors={themeColors} lang={lang} setLang={setLang} color={color} bgCard={bgCard}
                borderSubtle={borderSubtle} textSubtle={textSubtle} t={t}
              />
            )}

            {/* VISTA: ADMIN PANEL SUPER MEJORADO */}
            {activeTab === 'admin' && currentUser?.role === 'admin' && (
              <AdminDashboardView 
                users={users} products={products} setProducts={setProducts} orders={orders}
                adminView={adminView} setAdminView={setAdminView} editingProduct={editingProduct} setEditingProduct={setEditingProduct}
                color={color} bgCard={bgCard} borderSubtle={borderSubtle} textSubtle={textSubtle} t={t} showToast={showToast}
              />
            )}
            
          </div>
        </main>

        <div className="absolute bottom-[100px] right-4 z-40 flex flex-col items-end">
          {isChatOpen && (
            <div className={`mb-4 w-72 ${bgCard} border ${borderSubtle} rounded-3xl shadow-2xl overflow-hidden animate-fade-in flex flex-col`}>
              <div className={`${color.bg} p-3 text-white flex justify-between items-center shadow-md z-10`}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm"><Gift size={16}/></div>
                  <div>
                    <p className="font-bold text-sm leading-tight">{t.chat_support}</p>
                    <p className="text-[10px] text-white/80">En línea ahora</p>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="p-1 hover:bg-white/20 rounded-full transition-colors"><X size={16}/></button>
              </div>
              <div className="h-64 p-4 overflow-y-auto flex flex-col gap-3 bg-slate-50 dark:bg-slate-900/50">
                {chatMessages.map((m, i) => (
                  <div key={i} className={`max-w-[85%] p-3 text-sm shadow-sm ${m.sender === 'bot' ? `bg-white dark:bg-slate-800 border ${borderSubtle} self-start rounded-2xl rounded-tl-sm` : `${color.bg} text-white self-end rounded-2xl rounded-tr-sm font-medium`}`}>
                    {m.text}
                  </div>
                ))}
              </div>
              <div className={`p-2 border-t ${borderSubtle} flex gap-2 bg-white dark:bg-slate-800`}>
                <input type="text" placeholder={t.type_message} className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full px-4 text-sm outline-none" onKeyDown={(e) => {
                  if(e.key === 'Enter' && e.target.value.trim()) {
                    const msg = e.target.value;
                    setChatMessages(p => [...p, {sender:'user', text:msg}]); 
                    e.target.value='';
                    setTimeout(() => setChatMessages(p => [...p, {sender:'bot', text:`¡Entendido! Un asesor revisará tu solicitud pronto.`}]), 1000);
                  }
                }}/>
                <button className={`w-10 h-10 rounded-full ${color.bg} text-white flex items-center justify-center shadow-md`}><Send size={16} className="-ml-0.5"/></button>
              </div>
            </div>
          )}
          {!isChatOpen && (
             <button onClick={() => setIsChatOpen(true)} className={`w-14 h-14 rounded-full ${color.bg} text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative ${color.shadow}`}>
               <MessageCircle size={28} />
               <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse"></span>
             </button>
          )}
        </div>

        {!viewingProduct && (
          <nav className={`absolute bottom-0 w-full ${bgCard} border-t ${borderSubtle} flex justify-around items-center px-2 pb-6 pt-3 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] z-30 transition-colors rounded-b-[2.5rem]`}>
            <NavButton icon={<Home />} label={t.home} isActive={activeTab === 'home'} onClick={() => setActiveTab('home')} color={color} isDarkMode={isDarkMode} />
            <NavButton icon={<Grid />} label={t.categories} isActive={activeTab === 'categories'} onClick={() => setActiveTab('categories')} color={color} isDarkMode={isDarkMode} />
            
            <div className="relative -top-6">
              <button onClick={() => setActiveTab('cart')} className={`w-14 h-14 rounded-full ${color.bg} text-white flex items-center justify-center shadow-lg transform transition-transform ${activeTab === 'cart' ? 'scale-110' : 'hover:scale-105'} ${color.shadow}`}>
                <ShoppingBag size={24} />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-black">
                    {cart.reduce((sum, item) => sum + item.qty, 0)}
                  </span>
                )}
              </button>
            </div>

            <NavButton icon={<Heart />} label={t.wishlist} isActive={activeTab === 'wishlist'} onClick={() => currentUser ? setActiveTab('wishlist') : setActiveTab('auth')} color={color} isDarkMode={isDarkMode} />
            <NavButton icon={<User />} label={t.profile} isActive={activeTab === 'profile'} onClick={() => currentUser ? setActiveTab('profile') : setActiveTab('auth')} color={color} isDarkMode={isDarkMode} />
          </nav>
        )}

        <div className={`absolute inset-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsSidebarOpen(false)} />
          <div className={`absolute top-0 left-0 w-[85%] max-w-[320px] h-full ${bgCard} shadow-2xl flex flex-col rounded-r-[2.5rem] overflow-hidden`}>
            
            <div className={`p-6 ${color.bgLight} relative`}>
              <button onClick={() => setIsSidebarOpen(false)} className={`absolute top-4 right-4 p-2 rounded-full bg-white/50 text-slate-800 backdrop-blur-md`}><X size={20} /></button>
              <div className={`w-16 h-16 rounded-full ${color.bg} text-white flex items-center justify-center border-4 border-white dark:border-slate-800 text-2xl font-black mb-3 overflow-hidden shadow-md`}>
                {currentUser?.avatar ? <img src={currentUser.avatar} className="w-full h-full object-cover"/> : (currentUser ? currentUser.name.charAt(0).toUpperCase() : <User size={32}/>)}
              </div>
              <h3 className={`font-black text-lg text-slate-800 dark:text-slate-900 line-clamp-1`}>{currentUser ? currentUser.name : t.guest}</h3>
              <p className={`text-xs font-bold text-slate-600`}>{currentUser ? currentUser.email : t.login_to_continue}</p>
            </div>

            <div className="flex-1 overflow-y-auto py-4 flex flex-col px-4 gap-1">
              <p className="px-4 mt-2 mb-1 text-[10px] font-black text-slate-400 uppercase tracking-wider">Navegación</p>
              <SidebarItem icon={<Home />} label={t.home} color={color} active={activeTab === 'home'} onClick={() => {setActiveTab('home'); setIsSidebarOpen(false);}} />
              <SidebarItem icon={<Grid />} label={t.categories} color={color} active={activeTab === 'categories'} onClick={() => {setActiveTab('categories'); setIsSidebarOpen(false);}} />
              <SidebarItem icon={<Search />} label={t.catalog} color={color} active={activeTab === 'catalog'} onClick={() => {setSelectedCategory('Todos'); setActiveTab('catalog'); setIsSidebarOpen(false);}} />
              <SidebarItem icon={<Info />} label={t.about_us} color={color} active={activeTab === 'about'} onClick={() => {setActiveTab('about'); setIsSidebarOpen(false);}} />
              
              {currentUser && (
                <>
                  <SidebarItem icon={<User />} label={t.profile} color={color} active={activeTab === 'profile'} onClick={() => {setActiveTab('profile'); setIsSidebarOpen(false);}} />
                  <SidebarItem icon={<Package />} label={t.orders} color={color} active={activeTab === 'profile'} onClick={() => {setActiveTab('profile'); setIsSidebarOpen(false);}} />
                  <SidebarItem icon={<Heart />} label={t.wishlist} color={color} active={activeTab === 'wishlist'} onClick={() => {setActiveTab('wishlist'); setIsSidebarOpen(false);}} />
                </>
              )}
              
              <div className={`my-2 border-t ${borderSubtle}`} />
              <p className="px-4 mt-2 mb-1 text-[10px] font-black text-slate-400 uppercase tracking-wider">Soporte</p>
              <SidebarItem icon={<HelpCircle />} label={t.help_center} color={color} active={activeTab === 'help'} onClick={() => {showToast("Centro de ayuda en construcción"); setIsSidebarOpen(false);}} />
              <SidebarItem icon={<MessageSquare />} label={t.faq} color={color} active={activeTab === 'faq'} onClick={() => {showToast("FAQ en construcción"); setIsSidebarOpen(false);}} />

              <div className={`my-2 border-t ${borderSubtle}`} />
              <p className="px-4 mt-2 mb-1 text-[10px] font-black text-slate-400 uppercase tracking-wider">Sistema</p>
              <SidebarItem icon={<Settings />} label={t.settings} color={color} active={activeTab === 'settings'} onClick={() => {setActiveTab('settings'); setIsSidebarOpen(false);}} />
              
              {currentUser?.role === 'admin' && (
                <>
                  <div className={`my-2 border-t ${borderSubtle}`} />
                  <p className="px-4 mt-2 mb-1 text-[10px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1"><ShieldAlert size={12}/> Zona Segura Admin</p>
                  <SidebarItem icon={<ShieldAlert />} label={t.admin} color={color} active={activeTab === 'admin'} onClick={() => {setActiveTab('admin'); setIsSidebarOpen(false);}} />
                </>
              )}
            </div>

            <div className={`p-5 border-t ${borderSubtle} bg-slate-50 dark:bg-slate-900/50`}>
              {currentUser ? (
                <button onClick={logout} className="flex items-center justify-center gap-2 text-red-500 font-bold bg-red-100 dark:bg-red-900/20 w-full py-3.5 rounded-2xl transition-colors hover:opacity-80">
                  <LogOut size={18} /> {t.logout}
                </button>
              ) : (
                <button onClick={() => {setIsSidebarOpen(false); setActiveTab('auth');}} className={`flex items-center justify-center gap-2 ${color.text} font-bold ${color.bgLight} w-full py-3.5 rounded-2xl transition-colors hover:opacity-80`}>
                  <User size={18} /> {t.login}
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// COMPONENTES SECUNDARIOS / VISTAS AISLADAS
// ==========================================

function SplashScreen({ color, t, isDarkMode }) {
  return (
    <div className={`flex flex-col items-center justify-center w-full h-screen ${isDarkMode ? 'bg-slate-950' : 'bg-[#fff5f8]'} transition-colors duration-500`}>
      <div className="flex flex-col items-center animate-bounce">
        <div className={`w-28 h-28 mb-6 rounded-[2rem] flex items-center justify-center ${color.bg} shadow-lg shadow-${color.bg.split('-')[1]}-500/40`}>
          <Gift size={64} className="text-white" />
        </div>
        <h1 className={`text-5xl font-black tracking-tight ${color.text}`}>Pelu-xing</h1>
        <p className={`mt-4 text-sm font-bold text-slate-400 animate-pulse uppercase tracking-widest`}>{t.loading}</p>
      </div>
    </div>
  );
}

function AuthScreen({ onLogin, onRegister, onBack, color, t, isDarkMode, bgCard, bgMain, borderSubtle, toast }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPass, setRegPass] = useState('');
  const [regConfirmPass, setRegConfirmPass] = useState('');

  return (
    <div className={`flex justify-center items-center w-full min-h-screen ${isDarkMode ? 'bg-black' : 'bg-slate-200'} sm:p-4`}>
      <div className={`w-full sm:max-w-md h-[100dvh] sm:h-[850px] ${bgMain} sm:rounded-[2.5rem] shadow-2xl flex flex-col p-8 relative overflow-hidden`}>
        <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full ${color.bgLight} opacity-50 blur-3xl`}></div>
        <button onClick={onBack} className={`absolute top-6 left-6 z-20 p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors`}><ArrowLeft size={24}/></button>
        
        {toast && (
          <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50 animate-fade-in w-max max-w-[90%]">
            <div className={`${toast.type === 'error' ? 'bg-red-500' : color.bg} text-white px-5 py-3 rounded-full shadow-lg text-sm font-bold flex items-center gap-2`}>
              {toast.type === 'error' ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />} {toast.msg}
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col justify-center relative z-10">
          <div className={`w-20 h-20 rounded-3xl ${color.bg} flex items-center justify-center mb-6 shadow-lg ${color.shadow}`}>
            <Gift size={40} className="text-white" />
          </div>
          <h1 className="text-4xl font-black mb-2">{isRegister ? t.register : "Bienvenido a"} <br/>{!isRegister && "Pelu-xing"}</h1>
          <p className="text-slate-500 font-medium mb-6">{isRegister ? "Crea una cuenta para comprar" : "Inicia sesión para continuar"}</p>

          <div className="flex flex-col gap-4">
            {isRegister && (
               <div className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl ${bgCard} border ${borderSubtle} focus-within:${color.border} transition-colors shadow-sm`}>
                 <User size={20} className="text-slate-400" />
                 <input type="text" value={regName} onChange={e=>setRegName(e.target.value)} placeholder={t.name} className="bg-transparent outline-none w-full text-sm font-medium" />
               </div>
            )}
            <div className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl ${bgCard} border ${borderSubtle} focus-within:${color.border} transition-colors shadow-sm`}>
              <User size={20} className="text-slate-400" />
              <input type="email" value={isRegister ? regEmail : email} onChange={e=>isRegister ? setRegEmail(e.target.value) : setEmail(e.target.value)} placeholder={t.email} className="bg-transparent outline-none w-full text-sm font-medium" />
            </div>
            <div className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl ${bgCard} border ${borderSubtle} focus-within:${color.border} transition-colors shadow-sm`}>
              <Lock size={20} className="text-slate-400" />
              <input type="password" value={isRegister ? regPass : pass} onChange={e=>isRegister ? setRegPass(e.target.value) : setPass(e.target.value)} placeholder={t.password} className="bg-transparent outline-none w-full text-sm font-medium" />
            </div>
            {isRegister && (
               <div className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl ${bgCard} border ${borderSubtle} focus-within:${color.border} transition-colors shadow-sm`}>
                 <Lock size={20} className="text-slate-400" />
                 <input type="password" value={regConfirmPass} onChange={e=>setRegConfirmPass(e.target.value)} placeholder={t.confirm_pass} className="bg-transparent outline-none w-full text-sm font-medium" />
               </div>
            )}
            
            <button onClick={() => isRegister ? onRegister(regName, regEmail, regPass, regConfirmPass) : onLogin(email, pass)} className={`w-full py-4 mt-2 rounded-2xl ${color.bg} text-white font-black text-lg shadow-lg flex items-center justify-center gap-2 hover:opacity-90`}>
              {isRegister ? t.register : t.enter} <ChevronRight />
            </button>
            
            <button onClick={() => setIsRegister(!isRegister)} className="mt-2 text-sm font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
              {isRegister ? t.already_account : t.no_account}
            </button>

            {!isRegister && (
               <div className="mt-6 flex flex-col gap-2 text-xs font-medium text-slate-400 text-center bg-slate-100/50 dark:bg-slate-800/30 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-700/30">
                  <p className="text-[10px] uppercase tracking-widest font-black text-slate-500 mb-1">Contacto Corporativo</p>
                  <a href="#" className="flex items-center justify-center gap-2 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                     <Phone size={14} /> +56 9 1234 5678
                  </a>
                  <a href="#" className="flex items-center justify-center gap-2 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                     <Mail size={14} /> contacto@peluxing.com
                  </a>
                  <a href="#" className="flex items-center justify-center gap-2 hover:text-slate-600 dark:hover:text-slate-300 transition-colors mt-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 font-bold">
                     <HelpCircle size={14} /> Centro de Ayuda
                  </a>
               </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDetailView({ product, color, bgCard, bgMain, isDarkMode, borderSubtle, t, onClose, onAdd, textSubtle, isLiked, onLike }) {
  const [selectedSize, setSelectedSize] = useState(product.variants?.sizes?.[0] || 'Único');
  const [selectedColor, setSelectedColor] = useState(product.variants?.colors?.[0] || 'Estándar');
  const [qty, setQty] = useState(1);

  // Determinar precio a mostrar
  const activePrice = product.isOffer ? Number(product.discountPrice) : Number(product.price);
  const oldPrice = product.isOffer ? Number(product.price) : null;

  return (
    <div className={`absolute inset-0 z-40 ${bgMain} overflow-y-auto animate-fade-in flex flex-col`}>
      <div className="relative h-[45%] bg-slate-200 dark:bg-slate-800">
        <img src={product.images?.[0] || ''} className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full p-5 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
          <button onClick={onClose} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white"><ArrowLeft size={24}/></button>
          <button onClick={onLike} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white"><Heart size={24} className={isLiked ? 'fill-red-500 text-red-500' : ''}/></button>
        </div>
      </div>
      
      <div className={`flex-1 ${bgMain} -mt-8 rounded-t-[2.5rem] relative p-6 flex flex-col gap-6 pb-24`}>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-black leading-tight mb-1">{product.name}</h1>
            <div className="flex items-center gap-2">
              {product.isOffer && <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-red-500 text-white animate-pulse">OFERTA</span>}
              <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${color.bgLight} ${color.text}`}>{product.category}</span>
              <span className="flex items-center gap-1 text-xs font-bold text-slate-500"><Star size={12} className="text-yellow-400 fill-yellow-400"/> {product.rating || '5.0'}</span>
            </div>
          </div>
          <div className="text-right">
            {oldPrice && <p className="text-sm font-bold text-slate-400 line-through">${oldPrice.toFixed(2)}</p>}
            <p className={`text-3xl font-black ${product.isOffer ? 'text-red-500' : color.text}`}>${activePrice.toFixed(2)}</p>
          </div>
        </div>

        <p className={`text-sm leading-relaxed ${textSubtle}`}>{product.description}</p>

        <div className="flex flex-col gap-4">
          {product.variants?.sizes && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-2">{t.size}</p>
              <div className="flex gap-2">
                {product.variants.sizes.map(s => (
                  <button key={s} onClick={() => setSelectedSize(s)} className={`px-4 py-2 rounded-xl text-sm font-bold border transition-colors ${selectedSize === s ? `${color.border} ${color.text} ${color.bgLight}` : `${borderSubtle} text-slate-500`}`}>{s}</button>
                ))}
              </div>
            </div>
          )}
          {product.variants?.colors && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-2">{t.color}</p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.colors.map(c => (
                  <button key={c} onClick={() => setSelectedColor(c)} className={`px-4 py-2 rounded-xl text-sm font-bold border transition-colors ${selectedColor === c ? `${color.border} ${color.text} ${color.bgLight}` : `${borderSubtle} text-slate-500`}`}>{c}</button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full sm:max-w-md p-4 ${bgMain} border-t ${borderSubtle} flex gap-4 items-center z-20`}>
          <div className={`flex items-center gap-4 ${bgCard} border ${borderSubtle} px-4 py-3.5 rounded-2xl shadow-sm`}>
            <button onClick={() => setQty(Math.max(1, qty-1))} className="text-slate-400 font-black text-xl">-</button>
            <span className="font-black w-4 text-center">{qty}</span>
            <button onClick={() => setQty(qty+1)} className={`${color.text} font-black text-xl`}>+</button>
          </div>
          <button onClick={() => { onAdd(product, selectedSize, selectedColor, qty); onClose(); }} className={`flex-1 py-4 rounded-2xl ${color.bg} text-white font-black text-lg shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform`}>
            <ShoppingBag size={20} /> {t.add_to_cart}
          </button>
        </div>
      </div>
    </div>
  );
}

function CartReview({ cart, setCart, onCheckout, color, bgCard, borderSubtle, textSubtle, t }) {
  return (
    <>
      <div className="flex flex-col gap-3">
        {cart.map((item, idx) => (
          <div key={idx} className={`${bgCard} p-3 rounded-3xl border ${borderSubtle} flex gap-4 items-center shadow-sm relative group`}>
            <button onClick={() => setCart(c => c.filter((_, i) => i !== idx))} className="absolute top-2 right-2 p-1.5 rounded-full bg-red-50 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity dark:bg-red-900/30"><Trash2 size={14}/></button>
            <img src={item.images?.[0] || ''} className="w-20 h-20 rounded-2xl object-cover bg-slate-100" />
            <div className="flex-1 pr-4">
              <h4 className="font-bold text-sm leading-tight">{item.name}</h4>
              <p className={`text-[10px] font-bold ${textSubtle} uppercase mt-1 tracking-wider`}>{item.size} • {item.color}</p>
              <div className="flex items-center justify-between mt-2">
                <p className={`font-black text-lg ${color.text}`}>${Number(item.cartPrice || item.price).toFixed(2)}</p>
                <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-xl px-2 py-1">
                  <span className="text-xs font-black px-2">x{item.qty}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto pt-6">
        <div className={`${bgCard} p-5 rounded-3xl border ${borderSubtle} shadow-xl`}>
          <div className="flex gap-2 mb-4">
            <div className={`flex items-center gap-2 px-3 py-1 flex-1 bg-slate-100 dark:bg-slate-800 rounded-xl focus-within:ring-2 ${color.ring}`}>
              <Tag size={16} className={textSubtle}/>
              <input type="text" placeholder={t.coupon} className={`bg-transparent w-full text-sm outline-none font-medium`} />
            </div>
            <button className={`px-4 py-2.5 rounded-xl text-sm font-black ${color.bgLight} ${color.text}`}>{t.apply}</button>
          </div>
          <div className="flex justify-between items-end mb-4 border-t border-dashed border-slate-300 dark:border-slate-700 pt-4">
            <span className="text-slate-500 font-bold uppercase tracking-wider text-xs">{t.total}:</span>
            <span className="text-3xl font-black">${cart.reduce((sum, item) => sum + (Number(item.cartPrice || item.price) * item.qty), 0).toFixed(2)}</span>
          </div>
          <button onClick={onCheckout} className={`w-full py-4 rounded-2xl ${color.bg} text-white font-black text-lg shadow-lg ${color.shadow} flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform`}>
            {t.checkout} <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}

function CheckoutShipping({ form, setForm, onNext, onBack, color, bgCard, borderSubtle, t }) {
  return (
    <div className="flex flex-col flex-1 animate-fade-in">
      <div className={`${bgCard} p-6 rounded-3xl border ${borderSubtle} shadow-sm mb-4`}>
        <h3 className="font-black text-lg mb-5 flex items-center gap-2"><MapPin className={color.text}/> {t.shipping_info}</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Nombre del destinatario *</label>
            <input type="text" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 ${color.ring}`} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Dirección de entrega *</label>
            <input type="text" value={form.address} onChange={e=>setForm({...form, address: e.target.value})} className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 ${color.ring}`} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Ciudad / Región *</label>
            <input type="text" value={form.city} onChange={e=>setForm({...form, city: e.target.value})} className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 ${color.ring}`} />
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <button onClick={onNext} className={`w-full py-4 rounded-2xl ${color.bg} text-white font-black text-lg shadow-lg flex items-center justify-center gap-2`}>
          Continuar al Pago <ChevronRight />
        </button>
        <button onClick={onBack} className="w-full py-3 mt-2 text-slate-500 font-bold text-sm">Volver al Carrito</button>
      </div>
    </div>
  );
}

function CheckoutPayment({ form, setForm, onNext, onBack, color, bgCard, borderSubtle, t }) {
  return (
    <div className="flex flex-col flex-1 animate-fade-in">
      <div className={`${bgCard} p-6 rounded-3xl border ${borderSubtle} shadow-sm mb-4`}>
        <h3 className="font-black text-lg mb-5 flex items-center gap-2"><CreditCard className={color.text}/> {t.payment_method}</h3>
        
        <div className={`w-full h-40 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-600 mb-6 p-5 flex flex-col justify-between text-white shadow-lg relative overflow-hidden`}>
           <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${color.bg} opacity-50 blur-2xl`}></div>
           <div className="flex justify-between items-start z-10">
             <div className="w-10 h-6 bg-yellow-400/80 rounded-md"></div>
             <span className="font-black italic text-lg">VISA</span>
           </div>
           <div className="z-10">
             <p className="font-mono text-lg tracking-widest mb-1">{form.card || '•••• •••• •••• ••••'}</p>
             <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider opacity-80">
                <span>Exp: {form.expiry || 'MM/AA'}</span>
                <span>CVC: {form.cvc ? '•••' : '***'}</span>
             </div>
           </div>
        </div>

        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Número de Tarjeta *" value={form.card} onChange={e=>setForm({...form, card: e.target.value})} className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 ${color.ring}`} maxLength={16} />
          <div className="flex gap-3">
            <input type="text" placeholder="MM/AA *" value={form.expiry} onChange={e=>setForm({...form, expiry: e.target.value})} className={`w-1/2 bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 ${color.ring}`} maxLength={5} />
            <input type="text" placeholder="CVC *" value={form.cvc} onChange={e=>setForm({...form, cvc: e.target.value})} className={`w-1/2 bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 ${color.ring}`} maxLength={3} />
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <button onClick={onNext} className={`w-full py-4 rounded-2xl ${color.bg} text-white font-black text-lg shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform`}>
          {t.confirm_order} <CheckCircle2 />
        </button>
        <button onClick={onBack} className="w-full py-3 mt-2 text-slate-500 font-bold text-sm">Volver a Envío</button>
      </div>
    </div>
  );
}

function ProfileView({ user, orders, color, bgCard, borderSubtle, textSubtle, t, onEditProfile }) {
  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-black">{t.profile}</h2>
        <button onClick={onEditProfile} className={`p-2 rounded-full ${color.bgLight} ${color.text} hover:opacity-80 transition-opacity`}>
          <Edit2 size={18}/>
        </button>
      </div>

      <div className={`${bgCard} border ${borderSubtle} p-6 rounded-3xl shadow-sm flex flex-col items-center text-center relative overflow-hidden`}>
        <div className={`absolute top-0 left-0 w-full h-24 ${color.bg} opacity-10`}></div>
        <div className={`w-24 h-24 rounded-full ${color.bg} text-white flex items-center justify-center border-4 border-white dark:border-slate-800 text-3xl font-black mb-3 z-10 shadow-lg overflow-hidden`}>
          {user.avatar ? <img src={user.avatar} className="w-full h-full object-cover"/> : user.name.charAt(0).toUpperCase()}
        </div>
        <h2 className="text-xl font-black z-10">{user.name}</h2>
        <p className={`${textSubtle} text-sm mb-3 z-10`}>{user.email}</p>
        <span className={`px-4 py-1 ${user.role === 'admin' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'} rounded-full text-xs font-black uppercase tracking-wider z-10`}>
          {user.role === 'admin' ? 'Administrador' : 'Cliente Frecuente'}
        </span>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Package className={color.text}/> {t.orders}</h3>
        {orders.length === 0 ? (
           <div className={`p-6 rounded-3xl border border-dashed ${borderSubtle} text-center ${textSubtle} text-sm`}>
             <ShoppingBag size={32} className="mx-auto mb-2 opacity-50"/>
             No tienes pedidos recientes.
           </div>
        ) : (
          <div className="flex flex-col gap-4">
            {orders.map(order => (
              <div key={order.id} className={`${bgCard} p-5 rounded-3xl border ${borderSubtle} flex flex-col gap-4 shadow-sm`}>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-black text-sm block">{order.id}</span>
                    <span className={`font-medium text-xs ${textSubtle}`}>{order.date} • {order.items.length} items</span>
                  </div>
                  <span className={`font-black text-xl ${color.text}`}>${Number(order.total).toFixed(2)}</span>
                </div>
                
                <div className="relative pt-2">
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
                    <div className={`h-full ${color.bg} transition-all duration-1000 ${order.status === 'delivered' ? 'w-full' : order.status === 'shipped' ? 'w-2/3' : 'w-1/3'}`}></div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider text-slate-400 mt-2">
                    <span className={`${order.status !== 'delivered' ? color.text : ''}`}>Pend.</span>
                    <span className={`${order.status === 'shipped' ? color.text : ''}`}>Enviado</span>
                    <span className={`${order.status === 'delivered' ? color.text : ''}`}>Entregado</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function EditProfileView({ user, onSave, onBack, color, bgCard, borderSubtle, textSubtle, t, showToast }) {
  const [formData, setFormData] = useState({ name: user.name, email: user.email, avatar: user.avatar || '' });

  return (
    <div className="animate-fade-in flex flex-col gap-6">
      <div className="flex items-center gap-3 mb-2">
        <button onClick={onBack} className={`p-2 rounded-full ${bgCard} border ${borderSubtle} shadow-sm`}><ArrowLeft size={20}/></button>
        <h2 className="text-2xl font-black">{t.edit_profile}</h2>
      </div>

      <div className={`${bgCard} border ${borderSubtle} p-6 rounded-3xl shadow-sm flex flex-col gap-5`}>
        <div className="flex flex-col items-center mb-2">
          <div className="relative">
            <div className={`w-24 h-24 rounded-full ${color.bgLight} border-4 ${color.border} overflow-hidden flex items-center justify-center font-black text-3xl ${color.text}`}>
              {formData.avatar ? <img src={formData.avatar} className="w-full h-full object-cover"/> : formData.name.charAt(0)}
            </div>
            <button className={`absolute bottom-0 right-0 p-2 rounded-full ${color.bg} text-white shadow-md hover:scale-110 transition-transform`}><Camera size={14}/></button>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className={`text-xs font-bold uppercase tracking-wider ${textSubtle}`}>Nombre Completo</label>
          <input type="text" value={formData.name} onChange={e=>setFormData({...formData, name:e.target.value})} className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:ring-2 ${color.ring}`} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={`text-xs font-bold uppercase tracking-wider ${textSubtle}`}>Correo Electrónico</label>
          <input type="email" value={formData.email} onChange={e=>setFormData({...formData, email:e.target.value})} className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:ring-2 ${color.ring}`} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={`text-xs font-bold uppercase tracking-wider ${textSubtle}`}>URL Foto Perfil (Opcional)</label>
          <input type="text" value={formData.avatar} onChange={e=>setFormData({...formData, avatar:e.target.value})} placeholder="https://..." className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:ring-2 ${color.ring}`} />
        </div>

        <button onClick={() => { if(!formData.name || !formData.email) return showToast(t.empty_fields, 'error'); onSave(formData); }} className={`w-full py-4 mt-4 rounded-2xl ${color.bg} text-white font-black text-lg shadow-lg flex items-center justify-center gap-2`}>
          <Save size={20}/> {t.save_changes}
        </button>
      </div>
    </div>
  );
}

function SettingsView({ isDarkMode, setIsDarkMode, accent, setAccent, themeColors, lang, setLang, color, bgCard, borderSubtle, textSubtle, t }) {
  const [pushNotif, setPushNotif] = useState(true);
  const [emailNotif, setEmailNotif] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="animate-fade-in flex flex-col gap-6 pb-10">
      <h2 className="text-2xl font-black mb-2">{t.settings}</h2>

      {/* APARIENCIA */}
      <div>
        <h3 className={`text-xs font-black uppercase tracking-wider ${textSubtle} mb-3 ml-2`}>{t.appearance}</h3>
        <div className={`${bgCard} rounded-3xl border ${borderSubtle} overflow-hidden shadow-sm`}>
          <div className={`p-4 border-b ${borderSubtle} flex items-center justify-between`}>
            <div className="flex items-center gap-3 font-bold text-sm"><Moon size={20} className="text-indigo-500"/> {t.dark_mode}</div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} className="sr-only peer" />
              <div className={`w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${isDarkMode ? color.bg : ''}`}></div>
            </label>
          </div>
          <div className="p-5 flex flex-col gap-4">
            <div className="flex items-center gap-3 font-bold text-sm"><Palette size={20} className="text-rose-500"/> {t.theme_color}</div>
            <div className="flex justify-around mt-1 bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl">
              {Object.keys(themeColors).map(key => (
                <button key={key} onClick={() => setAccent(key)} className={`w-10 h-10 rounded-full transition-transform ${themeColors[key].bg} ${accent === key ? 'scale-110 ring-4 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 ' + themeColors[key].ring : 'hover:scale-105 shadow-sm'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* NOTIFICACIONES */}
      <div>
        <h3 className={`text-xs font-black uppercase tracking-wider ${textSubtle} mb-3 ml-2`}>{t.notifications}</h3>
        <div className={`${bgCard} rounded-3xl border ${borderSubtle} overflow-hidden shadow-sm`}>
          <div className={`p-4 border-b ${borderSubtle} flex items-center justify-between`}>
            <div className="flex items-center gap-3 font-bold text-sm"><Bell size={20} className="text-yellow-500"/> {t.push_notif}</div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={pushNotif} onChange={() => setPushNotif(!pushNotif)} className="sr-only peer" />
              <div className={`w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${pushNotif ? color.bg : ''}`}></div>
            </label>
          </div>
          <div className={`p-4 flex items-center justify-between`}>
            <div className="flex items-center gap-3 font-bold text-sm"><Mail size={20} className="text-blue-400"/> {t.email_notif}</div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={emailNotif} onChange={() => setEmailNotif(!emailNotif)} className="sr-only peer" />
              <div className={`w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${emailNotif ? color.bg : ''}`}></div>
            </label>
          </div>
        </div>
      </div>

      {/* PRIVACIDAD Y SEGURIDAD */}
      <div>
        <h3 className={`text-xs font-black uppercase tracking-wider ${textSubtle} mb-3 ml-2`}>{t.security}</h3>
        <div className={`${bgCard} rounded-3xl border ${borderSubtle} overflow-hidden shadow-sm`}>
          <div className={`p-4 flex items-center justify-between`}>
            <div className="flex items-center gap-3 font-bold text-sm"><ShieldAlert size={20} className="text-emerald-500"/> {t.two_factor}</div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={twoFactor} onChange={() => setTwoFactor(!twoFactor)} className="sr-only peer" />
              <div className={`w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${twoFactor ? color.bg : ''}`}></div>
            </label>
          </div>
        </div>
      </div>

      {/* SISTEMA & DATOS */}
      <div>
        <h3 className={`text-xs font-black uppercase tracking-wider ${textSubtle} mb-3 ml-2`}>Sistema</h3>
        <div className={`${bgCard} rounded-3xl border ${borderSubtle} overflow-hidden shadow-sm`}>
          <div className={`p-4 border-b ${borderSubtle} flex items-center justify-between`}>
            <div className="flex items-center gap-3 font-bold text-sm"><Globe size={20} className="text-blue-500"/> {t.language}</div>
            <div className={`flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl`}>
              <button onClick={() => setLang('es')} className={`px-4 py-1.5 text-xs font-black rounded-lg transition-all ${lang === 'es' ? `${color.bg} text-white shadow-sm` : textSubtle}`}>ES</button>
              <button onClick={() => setLang('en')} className={`px-4 py-1.5 text-xs font-black rounded-lg transition-all ${lang === 'en' ? `${color.bg} text-white shadow-sm` : textSubtle}`}>EN</button>
            </div>
          </div>
          <div className={`p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors`}>
            <div className="flex items-center gap-3 font-bold text-sm"><Database size={20} className="text-orange-500"/> {t.clear_cache}</div>
            <ChevronRight size={18} className={textSubtle} />
          </div>
        </div>
      </div>

      {/* DANGER ZONE */}
      <div className="mt-2">
        <button className={`w-full py-4 rounded-2xl bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-black text-sm flex items-center justify-center gap-2 hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors border border-red-200 dark:border-red-900/50`}>
          <Trash size={18} /> {t.delete_account}
        </button>
      </div>

    </div>
  );
}

function AdminDashboardView({ users, products, setProducts, orders, adminView, setAdminView, editingProduct, setEditingProduct, color, bgCard, borderSubtle, textSubtle, t, showToast }) {
  if(adminView === 'products' || adminView === 'form') {
    return <AdminProductCRUD products={products} setProducts={setProducts} adminView={adminView} setAdminView={setAdminView} editingProduct={editingProduct} setEditingProduct={setEditingProduct} color={color} bgCard={bgCard} borderSubtle={borderSubtle} t={t} showToast={showToast} textSubtle={textSubtle} />;
  }

  return (
    <div className="flex flex-col gap-4 animate-fade-in">
      <div className="grid grid-cols-2 gap-4">
        <div className={`${bgCard} p-5 rounded-3xl border ${borderSubtle} shadow-sm relative overflow-hidden`}>
          <div className={`absolute -right-4 -bottom-4 w-20 h-20 ${color.bgLight} rounded-full opacity-50`}></div>
          <p className={`text-xs font-black uppercase tracking-wider ${textSubtle} mb-1`}>{t.revenue}</p>
          <p className={`text-3xl font-black ${color.text}`}>$4.2k</p>
        </div>
        <div className={`${bgCard} p-5 rounded-3xl border ${borderSubtle} shadow-sm relative overflow-hidden`}>
          <div className={`absolute -right-4 -bottom-4 w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-50`}></div>
          <p className={`text-xs font-black uppercase tracking-wider ${textSubtle} mb-1`}>{t.users}</p>
          <p className={`text-3xl font-black text-blue-500`}>{users.length}</p>
        </div>
      </div>
      
      <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 shadow-inner font-mono text-xs">
        <div className="flex items-center justify-between mb-4">
          <span className="text-emerald-400 font-bold flex items-center gap-2 text-sm"><div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"/> MongoDB Secure Cluster</span>
        </div>
        <div className="flex flex-col gap-1.5 opacity-90">
          <p className="text-slate-400">{'>'} Connecting via TLS/SSL...</p>
          <p className="text-slate-400">{'>'} Auth: SCRAM-SHA-256 (admin)</p>
          <p className="text-slate-300 mt-2 font-bold border-b border-slate-800 pb-1 w-max">Collections Status:</p>
          <p className="text-indigo-300"> - db.users: {users.length} docs <span className="text-yellow-500">(Encrypted fields)</span></p>
          <p className="text-indigo-300"> - db.products: {products.length} docs</p>
          <p className="text-indigo-300"> - db.orders: {orders.length} docs</p>
        </div>
        <div className="mt-5 pt-3 border-t border-slate-800 flex flex-wrap items-center gap-3 text-slate-500 font-bold">
          <span className="flex items-center gap-1"><Lock size={12} className="text-emerald-500"/> CSRF Token</span>
          <span className="flex items-center gap-1"><ShieldAlert size={12} className="text-emerald-500"/> Rate Limiting</span>
        </div>
      </div>
    </div>
  );
}

function AdminProductCRUD({ products, setProducts, adminView, setAdminView, editingProduct, setEditingProduct, color, bgCard, borderSubtle, t, showToast, textSubtle }) {
  const isForm = adminView === 'form';
  const [form, setForm] = useState(editingProduct || { id: Date.now(), name: '', price: 0, isOffer: false, discountPrice: 0, stock: 0, category: 'Anime', description: '', images: [''], variants: { sizes: ['Único'], colors: ['Estándar'] } });

  const saveProduct = () => {
    if(!form.name || !form.price || !form.images[0]) {
      return showToast("Completa los campos obligatorios (Nombre, Precio, Imagen)", 'error');
    }
    if(form.isOffer && (!form.discountPrice || form.discountPrice >= form.price)) {
      return showToast("El precio de oferta debe ser menor al precio original.", 'error');
    }

    if (editingProduct) setProducts(products.map(p => p.id === form.id ? form : p));
    else setProducts([form, ...products]);
    setAdminView('products');
    setEditingProduct(null);
    showToast("Producto actualizado en BD correctamente");
  };

  if (isForm) return (
    <div className="flex flex-col gap-4 animate-fade-in pb-10">
      <div className="flex items-center gap-3 mb-2">
        <button onClick={() => setAdminView('products')} className={`p-2 bg-slate-200 dark:bg-slate-800 rounded-full hover:${color.bgLight} transition-colors`}><ArrowLeft size={18}/></button>
        <h3 className="text-xl font-black">{editingProduct ? t.edit_product : t.create_product}</h3>
      </div>
      <div className={`${bgCard} p-6 rounded-3xl border ${borderSubtle} flex flex-col gap-5 shadow-sm`}>
        <div className="flex flex-col gap-1.5">
          <label className={`text-[10px] font-black uppercase tracking-wider ${textSubtle}`}>{t.product_name} *</label>
          <input type="text" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:ring-2 ${color.ring}`} />
        </div>
        
        <div className="flex gap-4">
          <div className="flex flex-col gap-1.5 w-1/2">
            <label className={`text-[10px] font-black uppercase tracking-wider ${textSubtle}`}>{t.price} ($) *</label>
            <input type="number" value={form.price || ''} onChange={e=>setForm({...form, price: parseFloat(e.target.value) || 0})} className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:ring-2 ${color.ring}`} />
          </div>
          <div className="flex flex-col gap-1.5 w-1/2">
            <label className={`text-[10px] font-black uppercase tracking-wider ${textSubtle}`}>{t.stock} (Unidades)</label>
            <input type="number" value={form.stock || ''} onChange={e=>setForm({...form, stock: parseInt(e.target.value) || 0})} className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:ring-2 ${color.ring}`} />
          </div>
        </div>

        {/* Sección Especial: OFERTAS PARA ADMIN */}
        <div className={`p-4 rounded-2xl bg-yellow-50 border border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800/30 flex flex-col gap-4`}>
          <div className="flex items-center justify-between">
             <label className="text-sm font-bold text-yellow-800 dark:text-yellow-400 flex items-center gap-2"><Percent size={16}/> Activar Etiqueta de Oferta</label>
             <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={form.isOffer} onChange={() => setForm({...form, isOffer: !form.isOffer})} className="sr-only peer" />
              <div className={`w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400`}></div>
            </label>
          </div>
          {form.isOffer && (
             <div className="flex flex-col gap-1.5 animate-fade-in">
               <label className={`text-[10px] font-black uppercase tracking-wider text-yellow-800 dark:text-yellow-400`}>{t.discount_price} ($) *</label>
               <input type="number" value={form.discountPrice || ''} onChange={e=>setForm({...form, discountPrice: parseFloat(e.target.value) || 0})} className={`w-full bg-white dark:bg-slate-800 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 ring-yellow-400`} />
             </div>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className={`text-[10px] font-black uppercase tracking-wider ${textSubtle}`}>{t.category}</label>
          <select value={form.category} onChange={e=>setForm({...form, category: e.target.value})} className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:ring-2 ${color.ring}`}>
            <option>Anime</option><option>Clásicos</option><option>Animales</option><option>Gigantes</option><option>Sanrio</option><option>Disney</option><option>Películas</option><option>Series</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className={`text-[10px] font-black uppercase tracking-wider ${textSubtle}`}>{t.description}</label>
          <textarea value={form.description} onChange={e=>setForm({...form, description: e.target.value})} className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3.5 text-sm font-medium outline-none h-24 resize-none focus:ring-2 ${color.ring}`}></textarea>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className={`text-[10px] font-black uppercase tracking-wider ${textSubtle}`}>{t.image_url} *</label>
          <input type="text" value={form.images[0] || ''} onChange={e=>setForm({...form, images: [e.target.value]})} placeholder="https://..." className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:ring-2 ${color.ring}`} />
        </div>

        <button onClick={saveProduct} className={`w-full py-4 mt-2 rounded-2xl ${color.bg} text-white font-black text-lg shadow-lg flex items-center justify-center gap-2`}><Save size={20}/> {t.save}</button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-4 animate-fade-in pb-10">
      <button onClick={() => {setEditingProduct(null); setAdminView('form');}} className={`w-full py-4 rounded-3xl border-2 border-dashed ${color.border} ${color.text} font-black text-sm flex items-center justify-center gap-2 bg-transparent hover:${color.bgLight} transition-colors`}>
        <Plus size={20}/> {t.add_product}
      </button>
      
      {products.map(p => (
        <div key={p.id} className={`${bgCard} p-4 rounded-3xl border ${borderSubtle} flex justify-between items-center shadow-sm relative overflow-hidden`}>
          {p.isOffer && <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>}
          <div className="flex gap-4 items-center pl-2">
            <img src={p.images?.[0] || ''} className="w-16 h-16 rounded-2xl object-cover bg-slate-200" />
            <div>
              <p className="font-bold text-sm leading-tight line-clamp-1 pr-2">{p.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <p className={`text-xs font-black ${p.isOffer ? 'text-red-500' : color.text}`}>${Number(p.isOffer ? p.discountPrice : p.price).toFixed(2)}</p>
                {p.isOffer && <p className="text-[10px] font-bold text-slate-400 line-through">${Number(p.price).toFixed(2)}</p>}
              </div>
              <p className={`text-[10px] uppercase font-bold text-slate-400 mt-0.5`}>Stock: {p.stock} | {p.category}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <button onClick={() => {setEditingProduct(p); setAdminView('form');}} className="p-2.5 rounded-xl bg-blue-100 text-blue-500 dark:bg-blue-900/30 hover:bg-blue-200 transition-colors"><Edit2 size={16}/></button>
            <button onClick={() => setProducts(products.filter(item => item.id !== p.id))} className="p-2.5 rounded-xl bg-red-100 text-red-500 dark:bg-red-900/30 hover:bg-red-200 transition-colors"><Trash2 size={16}/></button>
          </div>
        </div>
      ))}
    </div>
  );
}

function NavButton({ icon, label, isActive, onClick, color, isDarkMode }) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center gap-1 min-w-[64px] transition-all duration-300 z-10 ${isActive ? color.text : (isDarkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600')}`}>
      <div className={`relative p-1 transition-transform duration-300 ${isActive ? '-translate-y-1' : ''}`}>
        {React.cloneElement(icon, { size: isActive ? 24 : 22, strokeWidth: isActive ? 2.5 : 2 })}
      </div>
      <span className={`text-[10px] font-bold ${isActive ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'} transition-all duration-300`}>{label}</span>
    </button>
  );
}

function SidebarItem({ icon, label, active, color, onClick }) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-colors font-bold text-sm ${active ? `${color.bgLight} ${color.text}` : `hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300`}`}>
      {React.cloneElement(icon, { size: 20, className: active ? color.text : 'text-slate-400' })}
      <span>{label}</span>
    </button>
  );
}

function ProductCard({ product, color, bgCard, borderSubtle, isDarkMode, isLiked, onLike, onClick, t }) {
  // Determinamos que precio mostrar
  const activePrice = product.isOffer ? Number(product.discountPrice) : Number(product.price);

  return (
    <div className={`${bgCard} rounded-3xl p-2.5 shadow-sm border ${borderSubtle} relative group flex flex-col cursor-pointer`} onClick={onClick}>
      <button onClick={(e) => { e.stopPropagation(); onLike(); }} className="absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-md bg-white/50 dark:bg-slate-900/50 shadow-sm transition-transform active:scale-90">
        <Heart size={16} className={`${isLiked ? 'text-red-500 fill-red-500' : 'text-slate-600 dark:text-slate-200'}`} />
      </button>
      {product.isOffer && <span className="absolute top-4 left-4 z-10 px-2 py-1 bg-red-500 text-white text-[10px] font-black uppercase rounded-lg shadow-sm animate-pulse">{t.special_offer}</span>}
      {!product.isOffer && product.isNew && <span className="absolute top-4 left-4 z-10 px-2 py-1 bg-yellow-400 text-yellow-900 text-[10px] font-black uppercase rounded-lg shadow-sm">Nuevo</span>}
      
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-3 bg-slate-100 dark:bg-slate-800">
        <img src={product.images?.[0] || ''} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col flex-1 px-1">
        <div className="flex items-center gap-1 mb-1">
          <Star size={10} className="text-yellow-400 fill-yellow-400" />
          <span className="text-[10px] font-bold text-slate-500">{product.rating || '5.0'}</span>
        </div>
        <h3 className={`font-bold text-xs mb-1 leading-tight line-clamp-2 ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>{product.name}</h3>
        
        <div className="mt-auto pt-2 flex items-baseline gap-2">
           <p className={`font-black text-sm ${product.isOffer ? 'text-red-500' : color.text}`}>${activePrice.toFixed(2)}</p>
           {product.isOffer && <p className="text-[10px] font-bold text-slate-400 line-through">${Number(product.price).toFixed(2)}</p>}
        </div>
      </div>
    </div>
  );
}