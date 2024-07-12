import React from 'react';
import { useNavigate } from 'react-router-dom';
import { News } from '../news'; // Ensure the news data is correctly imported

export function NewEvent() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="pt-5 container text-center text-secondary">
                <h3>TIN TUC & SU KIEN</h3>
            </div>
            <div className="row">
                {News.map((item) => {
                    return (
                        <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="card mt-5 mb-0">
                                <img
                                    src={item.image}
                                    className="card-img-top"
                                    alt="..."
                                    style={{ width: "100%", height: 250 }}
                                />
                                <div className="card-body bg-white m-3 mb-0">
                                    <div className="text-secondary mb-3">
                                        {item.date} | Leave a comment
                                    </div>
                                    <h6 className="card-title">{item.title}</h6>
                                    <p className="card-text truncate-text">{item.description.substring(0, 100)}...</p>
                                    <button
                                        onClick={() => {
                                            navigate('/detail', { state: item });
                                        }}
                                        className="btn btn-warnmint text-white"
                                        style={{ background: "orange", width: "100%" }}
                                    >
                                        Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
