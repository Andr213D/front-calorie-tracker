import type { NextPage } from 'next'
import TrainingLayout from "../../layouts/trainingRoom";
import Buttons from "../../components/Trainig/Buttons";

const TrainingRoom: NextPage = () => {
    return (
        <div>
            <TrainingLayout>
                <h2>
                    Welcome to training room
                </h2>
                <Buttons/>
            </TrainingLayout>
        </div>
    )
}

export default TrainingRoom