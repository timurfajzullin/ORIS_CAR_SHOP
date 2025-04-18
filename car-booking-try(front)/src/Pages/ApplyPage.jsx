import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/ApplyPage.css';
import { v4 as uuidv4 } from 'uuid'; // Импортируем функцию для генерации GUID

const ApplyPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        country: '',
        email: '',
        phone: '',
        comment: '',
        agree: false
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false); // Состояние для отслеживания отправки
    const [submitError, setSubmitError] = useState(null); // Состояние для ошибки отправки
    const navigate = useNavigate();

    const countries = [
        'Россия', 'Казахстан', 'Беларусь', 'Армения', 'Азербайджан',
        'Германия', 'Франция', 'Италия', 'США', 'Китай'
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handlePhoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        let formattedValue = '';

        if (value.length > 0) {
            formattedValue = `+${value.substring(0, 1)}`;
            if (value.length > 1) {
                formattedValue += ` (${value.substring(1, 4)}`;
                if (value.length > 4) {
                    formattedValue += `) ${value.substring(4, 7)}`;
                    if (value.length > 7) {
                        formattedValue += `-${value.substring(7, 9)}`;
                        if (value.length > 9) {
                            formattedValue += `-${value.substring(9, 11)}`;
                        }
                    }
                }
            }
        }

        setFormData(prev => ({
            ...prev,
            phone: formattedValue
        }));
    };

    const validate = () => {
        const newErrors = {};

        // Full name validation (at least 2 words)
        if (!formData.fullName.trim() || formData.fullName.trim().split(' ').length < 2) {
            newErrors.fullName = 'Введите имя и фамилию';
        }

        // Country validation
        if (!formData.country) {
            newErrors.country = 'Выберите страну';
        }

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Введите email';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Введите корректный email';
        }

        // Phone validation (at least 11 digits)
        const phoneDigits = formData.phone.replace(/\D/g, '');
        if (!phoneDigits || phoneDigits.length < 11) {
            newErrors.phone = 'Введите корректный телефон';
        }

        // Agreement validation
        if (!formData.agree) {
            newErrors.agree = 'Необходимо согласие';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError(null); // Сбрасываем предыдущие ошибки

        if (!validate()) {
            return;
        }

        setIsSubmitting(true); // Начинаем отправку

        try {
            // Генерируем уникальный GUID для каждой заявки
            const applicationId = uuidv4();

            // Формируем данные для отправки
            const applicationData = {
                Id: applicationId,
                FullName: formData.fullName,
                Country: formData.country,
                Email: formData.email,
                Phone: formData.phone,
                OtherInfo: formData.comment
            };

            // Отправляем данные на сервер
            const response = await fetch('http://localhost:5173/Applications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(applicationData),
            });

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }

            alert('Заявка успешно отправлена!');
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error) {
            console.error('Ошибка при отправке заявки:', error);
            setSubmitError('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.');
        } finally {
            setIsSubmitting(false); // Завершаем отправку
        }
    };

    return (
        <div className="apply-page">
            <div className="apply-header">
                <h1>Оформление заявки на лизинг</h1>
                <p>Заполните форму ниже и наш менеджер свяжется с вами в течение 15 минут</p>
            </div>

            <form onSubmit={handleSubmit} className="apply-form">
                <div className="form-group">
                    <label htmlFor="fullName">ФИО*</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Иванов Иван Иванович"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={errors.fullName ? 'error' : ''}
                    />
                    {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="country">Страна*</label>
                    <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={errors.country ? 'error' : ''}
                    >
                        <option value="">Выберите страну</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                        ))}
                    </select>
                    {errors.country && <span className="error-message">{errors.country}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Электронная почта*</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@mail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Телефон*</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="+7 (XXX) XXX-XX-XX"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="comment">Комментарий (необязательно)</label>
                    <textarea
                        id="comment"
                        name="comment"
                        placeholder="Ваш комментарий..."
                        value={formData.comment}
                        onChange={handleChange}
                        maxLength="500"
                    />
                    <div className="char-counter">{formData.comment.length}/500</div>
                </div>

                <div className="form-group checkbox-group">
                    <input
                        type="checkbox"
                        id="agree"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        className={errors.agree ? 'error' : ''}
                    />
                    <label htmlFor="agree">Я согласен на обработку персональных данных*</label>
                    {errors.agree && <span className="error-message">{errors.agree}</span>}
                </div>

                {submitError && <div className="submit-error">{submitError}</div>}

                <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting} // Блокируем кнопку во время отправки
                >
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </button>
            </form>
        </div>
    );
};

export default ApplyPage;