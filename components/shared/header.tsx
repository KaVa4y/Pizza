import { cn } from '@/lib/utils';
import { Container } from './container';
import * as React from 'react';
import Image from 'next/image';
import { Button } from '../ui';
import { ShoppingCart, User } from 'lucide-react';


interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                {/* Левая часть */}
                <div className=' flex items-center gap-4'>
                    <Image src="/logo.svg" alt="" width={35} height={35}/>
                    <div>
                        <h1 className='font-black text-2xl uppercase'>next pizza</h1>
                        <p>вкусней уже некуда</p>
                    </div>
                </div>
                {/* Правая часть */}
                <div className='gap-4 flex items-center'>
                    <Button variant="outline" className='gap-2'> <User size={16}/>Войти</Button>
                    <Button variant="outline" className='gap-2'> <ShoppingCart size={16}/></Button>
                </div>
            </Container>
        </header>
    );
}

