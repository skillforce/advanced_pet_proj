import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button } from 'shared/ui/Button/Button';

function App() {
    const { theme } = useTheme();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onCloseModal = () => setIsModalOpen(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Modal isOpen={isModalOpen} onClose={onCloseModal}>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Accusantium, alias architecto cumque deleniti
                dolorem doloremque est eum excepturi exercitationem fuga illum in minima numquam quam qui sint
                tempora tenetur
            </Modal>
            <NavBar />
            <Button onClick={() => { setIsModalOpen(true); }}>toggle</Button>
            <div className="main-content-block">
                <SideBar />
                <AppRouter />
            </div>
        </div>
    );
}

export default App;
