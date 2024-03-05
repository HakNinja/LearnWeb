import React, { useState } from 'react';

const Roadmap = () => {
    const [milestones, setMilestones] = useState([
        { id: 1, title: 'Step 1', description: 'Description of Step 1' },
        { id: 2, title: 'Step 2', description: 'Description of Step 2' },
        { id: 3, title: 'Step 3', description: 'Description of Step 3' },
        // Add more milestones as needed
    ]);

    const [activeMilestone, setActiveMilestone] = useState(null);

    const toggleMilestone = (id) => {
        setActiveMilestone(id === activeMilestone ? null : id);
    };

    return (
        <div className="flex flex-col items-center justify-center py-12">
            <h1 className="text-3xl font-bold mb-6">Interactive Roadmap</h1>
            <div className="w-full max-w-3xl">
                {milestones.map((milestone) => (
                    <div key={milestone.id} className="mb-4">
                        <div
                            className={`flex justify-between items-center px-4 py-2 border rounded-md cursor-pointer ${activeMilestone === milestone.id ? 'bg-gray-200' : ''
                                }`}
                            onClick={() => toggleMilestone(milestone.id)}
                        >
                            <h2 className="text-xl font-semibold">{milestone.title}</h2>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {activeMilestone === milestone.id ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 15l7-7 7 7"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                )}
                            </svg>
                        </div>
                        {activeMilestone === milestone.id && (
                            <div className="px-4 py-2 bg-gray-100 rounded-md">
                                <p>{milestone.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;