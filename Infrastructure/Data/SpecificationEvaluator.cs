using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class SpecificationEvaluator<T> where T : BaseEntity
{
    public static IQueryable<T> GetQuery(IQueryable<T> query, ISpecification<T> specification)
    {
        if (specification.Criteria != null)
            query = query.Where(specification.Criteria);

        if (specification.OrderBy != null)
            query = query.OrderBy(specification.OrderBy);

        if (specification.OrderByDescending != null)
            query = query.OrderByDescending(specification.OrderByDescending);

        if (specification.IsDistinct)
            query = query.Distinct();
        
        if(specification.IsPagingEnabled)
            query = query.Skip(specification.Skip).Take(specification.Take);

        query = specification.Includes.Aggregate(query, (current, include) => current.Include(include));
        query = specification.IncludeStrings.Aggregate(query, (current, include) => current.Include(include));

        return query;
    }

    public static IQueryable<TResult> GetQuery<TSpec, TResult>(IQueryable<T> query,
        ISpecification<T, TResult> spec)
    {
        if (spec.Criteria != null)
            query = query.Where(spec.Criteria);

        if (spec.OrderBy != null)
            query = query.OrderBy(spec.OrderBy);

        if (spec.OrderByDescending != null)
            query = query.OrderByDescending(spec.OrderByDescending);

        var selectQuery = query as IQueryable<TResult>;

        if (spec.Select != null)
            selectQuery = query.Select(spec.Select);

        if (spec.IsDistinct)
            selectQuery = selectQuery?.Distinct();

        if(spec.IsPagingEnabled)
            selectQuery = selectQuery?.Skip(spec.Skip).Take(spec.Take);

        return selectQuery ?? query.Cast<TResult>();
    }
}
