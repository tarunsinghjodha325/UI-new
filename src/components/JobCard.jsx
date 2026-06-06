import React from 'react';
import { MapPin, Briefcase, CheckCircle2, Bookmark, ExternalLink, Building2, Users, Star } from 'lucide-react';

const getScoreColor = (score) => {
  if (score >= 90) return { text: 'text-success-600', bg: 'bg-success-50', border: 'border-success-500', ring: 'stroke-success-500', scoreText: 'text-success-600' };
  if (score >= 70) return { text: 'text-primary', bg: 'bg-primary-50', border: 'border-primary', ring: 'stroke-primary', scoreText: 'text-primary' };
  return { text: 'text-slate-400', bg: 'bg-slate-50', border: 'border-slate-300', ring: 'stroke-slate-300', scoreText: 'text-slate-400' };
};

const MatchCircle = ({ score, size = 36 }) => {
  const c = getScoreColor(score);
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={r} fill="transparent" stroke="#E5E7EB" strokeWidth="3" />
        <circle
          cx={size/2}
          cy={size/2}
          r={r}
          fill="transparent"
          className={c.ring}
          strokeWidth="3"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-[10px] font-extrabold ${c.scoreText}`}>{score}%</span>
      </div>
    </div>
  );
};

const JobCard = ({ job, variant = 'default' }) => {
  const {
    company, logo, logoBg, title, companyColor, location, type, workType, experience, salary,
    matchScore, matchLabel, description, tags, missingSkills, whyMatch, postedOn, postedTime, via, savedDays, applyCost, match,
  } = job;

  const showMatchBadge = variant === 'default' || variant === 'saved';

  if (variant === 'find-jobs') {
    return (
      <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-card transition-all">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className={`w-12 h-12 ${logoBg || 'bg-slate-100'} rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0`}>
              {company.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h3 className="font-bold text-slate-900 text-base">{title}</h3>
                <span className="inline-flex items-center gap-1 text-success-600 text-sm font-bold bg-success-50 px-2 py-0.5 rounded-md">
                  <MatchCircle score={matchScore} size={20} />
                  {matchScore}%
                </span>
                {matchLabel && (
                  <span className="text-[10px] text-success-600 font-bold bg-success-50 px-2 py-0.5 rounded-md">
                    {matchLabel}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-500 mb-2">
                <span className="font-bold text-slate-700">{company}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-100" />
                <span>•</span>
                <MapPin className="w-3.5 h-3.5" />
                <span>{location}</span>
                {workType && (
                  <>
                    <span>•</span>
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{workType}</span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                <span className="font-bold text-slate-700">{salary}</span>
                <span>•</span>
                <span>{experience}</span>
                {job.employees && (
                  <>
                    <span>•</span>
                    <Users className="w-3 h-3" />
                    <span>{job.employees} Employees</span>
                  </>
                )}
              </div>
              {tags && tags.length > 0 && (
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {tags.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] font-semibold rounded-md">{t}</span>
                  ))}
                </div>
              )}
              {description && (
                <div className="text-xs text-slate-600 bg-success-50/50 border border-success-100 rounded-lg p-3 mb-2">
                  <span className="font-bold text-slate-800">Why it matches:</span> {description}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-end gap-3 shrink-0 w-56">
            {job.applyMessage && (
              <div className="text-right">
                <p className="text-[11px] font-bold text-slate-700 mb-1">Apply to this job</p>
                <p className="text-[10px] text-slate-500 leading-tight">{job.applyMessage}</p>
              </div>
            )}
            {applyCost && (
              <div className="flex items-center gap-1 text-[11px] font-bold text-primary">
                <ZapIcon className="w-3 h-3" /> {applyCost} Credits
              </div>
            )}
            {job.viewDetails && (
              <button className="px-3 py-1.5 bg-slate-50 border border-border rounded-lg text-[11px] font-bold text-slate-600 hover:bg-slate-100 transition-colors line-through opacity-60">
                View Details
              </button>
            )}
            <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary-600 transition-colors flex items-center gap-1.5">
              Apply Now <ExternalLink className="w-3 h-3" />
            </button>
            {job.bookmark && (
              <button className="text-slate-400 hover:text-primary transition-colors">
                <Bookmark className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default large card variant (used in slide-04 AI Job Match, slide-10 Saved Jobs)
  return (
    <div className="bg-white border border-border rounded-2xl p-5 hover:shadow-card transition-all">
      <div className="flex items-start gap-4">
        {variant === 'saved' && (
          <input type="checkbox" className="mt-2 w-4 h-4 rounded border-border text-primary focus:ring-primary" />
        )}

        <div className={`w-12 h-12 ${logoBg || 'bg-slate-100'} rounded-xl flex items-center justify-center text-white font-extrabold text-lg shrink-0`}>
          {company.charAt(0)}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-1.5">
            <div>
              <h3 className="font-bold text-slate-900 text-base">{title}</h3>
              {variant === 'saved' && (
                <div className="mt-1 text-base font-bold text-slate-900">{salary}</div>
              )}
            </div>
            {showMatchBadge && (
              <div className="flex flex-col items-end gap-1 shrink-0">
                {variant !== 'saved' && <MatchCircle score={matchScore} size={44} />}
                {variant === 'saved' && (
                  <span className="text-[11px] font-bold text-success-600 bg-success-50 px-2 py-0.5 rounded-md">
                    {matchScore}% Match
                  </span>
                )}
                {variant === 'saved' && <button className="text-slate-400 hover:text-slate-700 mt-1"><span className="text-xl leading-none">⋮</span></button>}
                {variant === 'default' && (
                  <button className="text-slate-400 hover:text-primary transition-colors flex items-center gap-1 text-[11px] font-semibold">
                    <Bookmark className="w-3.5 h-3.5" /> Save
                  </button>
                )}
              </div>
            )}
          </div>

          {variant === 'default' && (
            <div className="text-[10px] text-slate-400 font-bold mb-2">Match Score</div>
          )}

          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2 flex-wrap">
            <span className="font-bold text-slate-700">{company}</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-100" />
            {location && (
              <>
                <span>•</span>
                <MapPin className="w-3.5 h-3.5" />
                <span>{location}</span>
              </>
            )}
            {type && (
              <>
                <span>•</span>
                <Briefcase className="w-3.5 h-3.5" />
                <span>{type}</span>
              </>
            )}
            {variant === 'saved' && workType && (
              <>
                <span>•</span>
                <span>{workType}</span>
              </>
            )}
          </div>

          {variant === 'default' && (
            <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 mb-3 flex-wrap">
              {experience && <span className="px-2 py-0.5 bg-slate-100 rounded-md">{experience}</span>}
              {salary && <span className="px-2 py-0.5 bg-slate-100 rounded-md">{salary}</span>}
            </div>
          )}

          {variant === 'default' && description && (
            <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">{description}</p>
          )}

          {variant === 'default' && whyMatch && whyMatch.length > 0 && (
            <div className="mb-3">
              <div className="text-[11px] font-bold text-slate-700 mb-1.5">Why it's a great match</div>
              <ul className="space-y-1">
                {whyMatch.map((w, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-success-500 mt-0.5 shrink-0" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {variant === 'default' && missingSkills && missingSkills.length > 0 && (
            <div className="flex items-start gap-2 mb-3">
              <span className="text-[10px] font-bold text-slate-500 mt-1">Missing Skills</span>
              <div className="flex flex-wrap gap-1.5">
                {missingSkills.map((s, i) => (
                  <span key={i} className="px-2 py-0.5 bg-primary-50 text-primary text-[10px] font-bold rounded-md">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {variant === 'default' && (
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <div className="text-[10px] text-slate-400 font-medium">
                {postedOn && <span>Posted on {postedOn}</span>}
                {postedTime && <span className="ml-2 text-slate-400">{postedTime}</span>}
              </div>
              <div className="flex items-center gap-2">
                {via && <span className="text-[10px] text-slate-400 font-medium">via {via}</span>}
                <button className="px-3 py-1.5 bg-primary text-white text-[11px] font-bold rounded-md hover:bg-primary-600 transition-colors flex items-center gap-1">
                  Apply Now <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}

          {variant === 'saved' && (
            <>
              {tags && tags.length > 0 && (
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {tags.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] font-semibold rounded-md">{t}</span>
                  ))}
                </div>
              )}
              <div className="text-[10px] text-slate-400 font-medium">Saved {savedDays} days ago</div>
            </>
          )}
        </div>
      </div>

      {variant === 'saved' && (
        <div className="flex items-center justify-end gap-2 mt-4 pt-3 border-t border-slate-100">
          <button className="px-3 py-1.5 bg-slate-50 border border-border rounded-lg text-[11px] font-bold text-slate-400 line-through opacity-60">
            View Details
          </button>
          <button className="px-3 py-1.5 bg-primary text-white text-[11px] font-bold rounded-md hover:bg-primary-600 transition-colors flex items-center gap-1">
            Apply Now <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
};

const ZapIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
);

export default JobCard;
