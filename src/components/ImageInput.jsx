import '../assets/styles/imageinput.css';
import { useController, useFormContext } from 'react-hook-form';
import { ImageIcon } from './Icons';
import { ErrorLabel } from './ErrorLabel';

export function ImageInput({ name, rules }) {
    const { control, errors, setValue } = useFormContext();
    const {
        field: { onChange, onBlur, value, ref, name: fieldName },
        fieldState: { isDirty }
    } = useController({
        name,
        control,
        rules
    });

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    async function handleInputChange(e) {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const result = await getBase64(file);
            onChange(result);
            if (file.type.startsWith('image/')) {
                setValue('tipo_imagen', file.type.split('/')[1]);
            }
        }
    }

    return (
        <>
            <div
                className={`image-input-container ${isDirty ? 'uploaded' : ''}`}
            >
                <label
                    htmlFor="image-file-input"
                    className="custom-image-input"
                >
                    <div className="flex-col">
                        <ImageIcon width={96} height={96}></ImageIcon>
                    </div>
                </label>
                <input
                    name={fieldName}
                    onBlur={onBlur}
                    ref={ref}
                    id="image-file-input"
                    type="file"
                    onChange={handleInputChange}
                    accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                ></input>
                <img src={value || '/propiedad-image-placeholder.png'}></img>
            </div>
            {errors && errors[name] && (
                <ErrorLabel>{errors[name].message}</ErrorLabel>
            )}
        </>
    );
}
