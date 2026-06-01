import Image from 'next/image';

const SIZES = {
    sm: { box: 'w-10 h-10 rounded-lg', text: 'text-lg', px: 40 },
    md: { box: 'w-14 h-14 rounded-xl', text: 'text-2xl', px: 56 },
    lg: { box: 'w-20 h-20 rounded-2xl', text: 'text-3xl', px: 80 },
};

/**
 * Avatar — renders a square-rounded image when `photo` is provided,
 * otherwise a tinted square-rounded box with the name's first initial.
 */
export const Avatar = ({ photo, name, size = 'md', className = '' }) => {
    const s = SIZES[size] ?? SIZES.md;

    if (photo) {
        return (
            <Image
                src={photo}
                alt={name || ''}
                width={s.px}
                height={s.px}
                className={`${s.box} object-cover ${className}`}
                unoptimized
            />
        );
    }

    return (
        <div
            aria-hidden="true"
            className={`${s.box} bg-mowka-link/10 text-mowka-link flex items-center justify-center font-serif font-medium ${s.text} ${className}`}
        >
            {name?.trim().charAt(0).toUpperCase() || '·'}
        </div>
    );
};
