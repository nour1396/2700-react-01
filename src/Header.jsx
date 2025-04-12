import Button from './Buttons';

export default function Header() {

    const appName = 'The Company'

    return (
        <header>
            <h1>{appName}</h1>


            <div>
                <Button text='Subscripe'></Button>
                <Button text='Register Now'></Button>
            </div>
        </header>
    );
}