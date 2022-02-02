import type { NextPage } from 'next'
import TrainingLayout from "../../layouts/trainingRoom";
import Buttons from "../../components/Trainig/Buttons";
import WrapPopup from "../../components/Trainig/Popup";
import Tabels from "../../components/Trainig/Table/Tabels";

const Training: NextPage = () => {
    return (
        <TrainingLayout>
            <h2>
                Welcome to training room
            </h2>
            <Buttons/>
            <WrapPopup/>
            <Tabels/>
        </TrainingLayout>
    )
}

export default Training