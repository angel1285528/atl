import Image from 'next/image';
import clsx from 'clsx';

const Logo = () => {
    return (
        <div className={clsx(
            "relative mx-auto flex-shrink-0",
            "md:absolute md:left-8 md:pb-8  "
        )}>
            <div className="block mx-auto w-12 h-12 md:w-24 md:h-24  md:mx-0">
                <Image
                    src="/logo-academia.svg"
                    alt="Logo Academia"
                    width={144}
                    height={144}
                    layout="responsive"
                />
            </div>
        </div>
    );
};

export default Logo;