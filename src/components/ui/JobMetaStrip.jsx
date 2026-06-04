import { JOB_META_FIELDS } from '../../constants/jobs';

export const JobMetaStrip = ({ job, className = '', variant = 'detail' }) => {
    const items = JOB_META_FIELDS
        .filter(({ listing }) => variant === 'detail' || listing !== false)
        .map(({ key, icon, format }) => ({ icon, value: format ? format(job) : job[key] }))
        .filter((item) => item.value);

    return (
        <div className={`flex flex-wrap items-center gap-x-5 gap-y-1 ${className}`}>
            {items.map(({ icon: Icon, value }) => (
                <span key={value} className="inline-flex items-center gap-1.5 text-sm text-mowka-text-tertiary font-normal">
                    <Icon className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
                    {value}
                </span>
            ))}
        </div>
    );
};
