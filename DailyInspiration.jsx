
import { useEffect, useState } from "react";

export default function DailyInspiration() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function getQuote() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://dummyjson.com/quotes/random"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }

      const data = await response.json();
      setQuote(data);
    } catch (err) {
      setError("Couldn't load a quote. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <section id="daily-inspiration" className="daily-inspiration py-5">
      <div className="container text-center">
        <h2 className="mb-3">Daily Inspiration</h2>

        <p className="text-muted mb-4">
          A little motivation to keep you going.
        </p>

        {loading && <p>Loading quote...</p>}

        {error && (
          <div>
            <p>{error}</p>
            <button className="btn btn-primary" onClick={getQuote}>
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && quote && (
          <div className="quote-card mx-auto p-4">
            <i className="fa-solid fa-quote-left quote-icon"></i>

            <blockquote className="my-3">
              {quote.quote}
            </blockquote>

            <p className="quote-author mb-4">
              — {quote.author}
            </p>

            <button
              className="btn btn-primary"
              onClick={getQuote}
            >
              <i className="fa-solid fa-rotate me-2"></i>
              New Quote
            </button>
          </div>
        )}
      </div>
    </section>
  );
}


